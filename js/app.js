/* Home page: join form, live card preview, wall */
let pick="☕",filter="all",shown=0,cur=[];
const members=loadMembers().sort((a,b)=>b.n-a.n);
const draft=store.get("bnc_draft");
if(draft){$("#name").value=draft.name||"";$("#msg").value=draft.msg||"";$("#cnt").textContent=($("#msg").value.length)+"/60";pick=draft.emoji||pick}

const previewData=()=>({n:0,name:$("#name").value.trim()||"—",msg:$("#msg").value.trim()||t("defmsg"),emoji:pick,ts:Date.now(),preview:true});
const redraw=()=>drawCard(previewData());
FLAGS.forEach(f=>{const b=document.createElement("button");b.type="button";b.textContent=f;b.setAttribute("aria-pressed",f===pick);b.onclick=()=>{pick=f;$$("#emo button").forEach(x=>x.setAttribute("aria-pressed",x===b));redraw()};$("#emo").append(b)});
$("#msg").oninput=e=>{$("#cnt").textContent=e.target.value.length+"/60";redraw()};
$("#name").oninput=redraw;
$("#cta").onclick=()=>{$("#join").scrollIntoView();setTimeout(()=>$("#name").focus({preventScroll:true}),500)};

$("#f").onsubmit=e=>{
  e.preventDefault();const name=$("#name").value.trim();
  if(!name){$("#err").textContent=t("errn");$("#name").focus();return}
  store.set("bnc_draft",{name,msg:$("#msg").value.trim(),emoji:pick});
  location.href="pay.html";
};

function stats(){const n=members.length.toLocaleString();$("#s1").textContent=n;$("#s2").textContent=n;$("#s3").textContent="$"+n}
function filtered(){
  const q=$("#q").value.trim().toLowerCase();
  return members.filter(m=>(!q||(m.name+" "+m.msg).toLowerCase().includes(q))&&(filter==="all"||(filter==="gold"&&m.n<=10)||(filter==="link"&&/https?:\/\//i.test(m.msg))));
}
function item(m){
  const b=badge(m),d=document.createElement("article");d.className="m glass";
  d.innerHTML=`<div class="mh"><a href="member.html?n=${m.n}">#${m.n}</a><span class="bdg ${b.c}" style="color:${b.c?"":"var(--fg)"}">${b.l}</span></div><div class="nm">${m.emoji} ${esc(m.name)}</div><div class="ms">${isUrl(m.msg)?`<a href="${esc(m.msg)}" target="_blank" rel="nofollow noopener ugc">${esc(m.msg)}</a>`:esc(m.msg)}</div><div class="mf"><span>${fmtDate(m.ts)}</span></div>`;
  return d;
}
function renderWall(reset){
  if(reset){cur=filtered();shown=0;$("#list").innerHTML=""}
  if(reset&&!cur.length){$("#list").innerHTML=`<div class="empty">${members.length?t("none"):t("first")}</div>`;return}
  const next=cur.slice(shown,shown+12);next.forEach(m=>$("#list").append(item(m)));shown+=next.length;
}
new IntersectionObserver(es=>{if(es[0].isIntersecting&&shown<cur.length)renderWall(false)},{rootMargin:"300px"}).observe($("#sentinel"));
$("#q").oninput=()=>renderWall(true);
$$("[data-f]").forEach(b=>b.onclick=()=>{filter=b.dataset.f;$$("[data-f]").forEach(x=>x.classList.toggle("on",x===b));renderWall(true)});

function onLang(){stats();renderWall(true);redraw()}
(document.fonts?document.fonts.ready:Promise.resolve()).then(redraw);
applyLang();
