/* Member page: ?n=<number>, or ?paid=1 after a live Stripe payment */
const q=new URLSearchParams(location.search);let m=null;
if(q.get("paid")==="1"&&store.get("bnc_draft")){m=finalizeMember();if(m)history.replaceState(null,"","member.html?n="+m.n)}
if(!m){const all=loadMembers(),n=+q.get("n");m=n?all.find(x=>x.n===n):all[all.length-1]}
function onLang(){
  $("#found").hidden=!m;$("#nf").hidden=!!m;if(!m)return;
  const b=badge(m);
  $("#wel").textContent=t("wel")(m.name);
  $("#mnum").textContent=t("mnum")+" #"+pad(m.n);
  $("#mdate").textContent=fmtDate(m.ts);$("#mbdg").textContent=b.l;$("#mmsg").textContent=m.msg;
  document.title=t("mnum")+" #"+m.n+" – BuyNoCoffee";
  drawCard(m);
}
if(m){
  $("#dl").onclick=()=>downloadCard(m);
  $("#sh").onclick=()=>shareOnX(m);
  $("#cp").onclick=()=>{(navigator.clipboard?navigator.clipboard.writeText(CONFIG.SITE_URL):Promise.reject()).then(()=>toast(t("copied")),()=>toast(CONFIG.SITE_URL))};
}
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>m&&onLang());
applyLang();
