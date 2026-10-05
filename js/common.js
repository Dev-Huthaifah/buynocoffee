/* Shared: i18n, theme, storage, helpers */
const T={
en:{members:"Members",saved:"Coffees saved",raised:"Total raised",h1:"Coffee fades in 5 minutes. Your name won't.",slogan:"Skip the caffeine. Claim digital immortality for $1.",cta:"Join the Club for $1",
c1:"$5 latte: gone in 5 minutes",c2:"$1 digital spot: forever",c3:"One costs you a jittery afternoon. The other gets you a gold card and bragging rights until the servers melt.",
jt:"Claim your spot",js:"Fill in three things, pay one dollar, get a membership card.",fn:"Name or handle",fnp:"e.g. DecafDave",fm:"Motto or link (60 characters max)",fmp:"Why I skipped the coffee…",fe:"Country or emoji",
pay:"Pay $1.00 · Apple Pay / Card",proc:"Processing…",demo:"Demo mode: no real payment is taken.",preview:"Your card appears here after you join.",
dl:"Download card",sh:"Share on X",wt:"The Wall of Digital Immortality",ws:"Every member, newest first.",search:"Search names and mottos",
fa:"All",fg:"Founding",fl:"With links",fmine:"Mine",first:"The wall is empty. Be member #1 and claim the top spot forever.",none:"No members match. Change your search or filter.",
disc:"Not affiliated with coffee beans or actual caffeine. 100% digital absurdity.",bip:"Build in Public tracker",gh:"GitHub repo",
errn:"Enter a name or handle.",ok:"Welcome to eternity!",dled:"Card downloaded",
founding:"Founding",immortal:"Immortal",cardtop:"OFFICIAL MEMBER · DIGITAL IMMORTALITY",issued:"Issued",
tw:(n)=>`I skipped a coffee and bought digital immortality for $1. Member #${n} of BuyNoCoffee ☕🚫`,defmsg:"Skipped a coffee. No regrets.",defname:"Anonymous Legend"},
ar:{members:"الأعضاء",saved:"قهوة تم توفيرها",raised:"إجمالي المبالغ",h1:"القهوة تختفي بعد 5 دقائق. اسمك لن يختفي.",slogan:"تجاوز القهوة. احجز خلودك الرقمي بـ 1 دولار.",cta:"انضم إلى النادي بدولار",
c1:"لاتيه بـ 5 دولارات: ينتهي خلال 5 دقائق",c2:"مكان رقمي بدولار: للأبد",c3:"الأولى تمنحك عصرًا مرتجفًا. الثانية تمنحك بطاقة ذهبية وحق التباهي حتى تذوب الخوادم.",
jt:"احجز مكانك",js:"املأ ثلاثة حقول، ادفع دولارًا، واحصل على بطاقة عضويتك.",fn:"الاسم أو المعرّف",fnp:"مثال: أبو الديكاف",fm:"شعار أو رابط (60 حرفًا كحد أقصى)",fmp:"لماذا تجاوزت القهوة…",fe:"الدولة أو إيموجي",
pay:"ادفع 1.00$ · Apple Pay / بطاقة",proc:"جارٍ المعالجة…",demo:"وضع تجريبي: لا يتم سحب أي مبلغ فعلي.",preview:"ستظهر بطاقتك هنا بعد الانضمام.",
dl:"تحميل البطاقة",sh:"شارك على X",wt:"جدار الخلود الرقمي",ws:"كل الأعضاء، الأحدث أولًا. مرّر لعرض المزيد.",search:"ابحث في الأسماء والشعارات",
fa:"الكل",fg:"المؤسسون",fl:"بروابط",fmine:"بطاقتي",first:"الجدار فارغ. كن العضو رقم 1 واحجز المركز الأول للأبد.",none:"لا يوجد أعضاء مطابقون. غيّر البحث أو التصفية.",
disc:"لا علاقة لنا بحبوب القهوة أو الكافيين الحقيقي. عبثية رقمية 100%.",bip:"متتبع البناء العلني",gh:"مستودع GitHub",
errn:"أدخل اسمًا أو معرّفًا.",ok:"أهلًا بك في الخلود!",dled:"تم تحميل البطاقة",
founding:"مؤسس",immortal:"خالد",cardtop:"عضو رسمي · الخلود الرقمي",issued:"تاريخ الإصدار",
tw:(n)=>`تجاوزت قهوة واشتريت الخلود الرقمي بدولار. العضو رقم ${n} في BuyNoCoffee ☕🚫`,defmsg:"تجاوزت قهوة. بلا ندم.",defname:"أسطورة مجهولة"}};
Object.assign(T.en,{cont:"Continue to payment · $1.00",preview:"Live preview of your card.",
pt:"Checkout",ps:"One dollar. One coffee skipped. A spot on the wall for good.",sum:"Order summary",item:"Digital immortality (skip 1 coffee)",total:"Total",
ap:"Pay with Apple Pay",cardpay:"Pay $1.00 with card",or:"or",secure:"Live checkout opens a secure Stripe page. We never see your card details.",
nodraft:"Nothing to pay for yet. Fill in the join form first.",edit:"Edit details",tojoin:"Go to the join form",
mt:"Your official membership card",mnf:"Member not found",mnfd:"This member isn't saved on this device. Join to get your own card.",
copy:"Copy site link",copied:"Link copied",mnum:"Member",bdg:"Badge",mot:"Motto",wallb:"View the wall",joinb:"Join for $1",
wel:n=>`Welcome to eternity, ${n}!`});
Object.assign(T.ar,{cont:"المتابعة إلى الدفع · 1.00$",preview:"معاينة مباشرة لبطاقتك.",
pt:"الدفع",ps:"دولار واحد. قهوة واحدة تم تجاوزها. مكان دائم على الجدار.",sum:"ملخص الطلب",item:"الخلود الرقمي (تجاوز قهوة واحدة)",total:"الإجمالي",
ap:"ادفع عبر Apple Pay",cardpay:"ادفع 1.00$ بالبطاقة",or:"أو",secure:"يفتح الدفع الفعلي صفحة Stripe آمنة. لا نرى بيانات بطاقتك أبدًا.",
nodraft:"لا يوجد شيء للدفع بعد. املأ نموذج الانضمام أولًا.",edit:"تعديل البيانات",tojoin:"الذهاب إلى نموذج الانضمام",
mt:"بطاقة عضويتك الرسمية",mnf:"العضو غير موجود",mnfd:"هذا العضو غير محفوظ على هذا الجهاز. انضم لتحصل على بطاقتك.",
copy:"نسخ رابط الموقع",copied:"تم نسخ الرابط",mnum:"العضو",bdg:"الشارة",mot:"الشعار",wallb:"عرض الجدار",joinb:"انضم بدولار",
wel:n=>`أهلًا بك في الخلود، ${n}!`});
const FLAGS=["🇺🇸","🇸🇦","🇸🇾","🇦🇪","🇪🇬","🇬🇧","🇩🇪","🇳🇱","🇫🇷","🇯🇵","🇧🇷","🇮🇳","🌍","☕","🚀","👑"];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let lang="en",theme="dark";
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const t=k=>T[lang][k];
const pad=n=>String(n).padStart(4,"0");
const esc=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isUrl=s=>/^https?:\/\/\S+$/i.test(s);
const fmtDate=ts=>new Intl.DateTimeFormat(lang==="ar"?"ar":"en",{year:"numeric",month:"short",day:"numeric"}).format(ts);
const badge=m=>m.n<=10?{c:"gold",l:"👑 "+t("founding")}:{c:"",l:"✓ "+t("immortal")};
function toast(m){const e=$("#toast");if(!e)return;e.textContent=m;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),2400)}

/* members live in localStorage until you connect a backend (see README) */
const loadMembers=()=>store.get("bnc_mine")||[];
const nextN=()=>loadMembers().reduce((a,m)=>Math.max(a,m.n),0)+1;
function finalizeMember(){
  const d=store.get("bnc_draft");if(!d)return null;
  const m={n:nextN(),name:d.name,msg:d.msg||t("defmsg"),emoji:d.emoji,ts:Date.now()};
  const all=loadMembers();all.push(m);store.set("bnc_mine",all);store.del("bnc_draft");return m;
}
function shareOnX(m){open("https://twitter.com/intent/tweet?text="+encodeURIComponent(t("tw")(m.n))+"&url="+encodeURIComponent(CONFIG.SITE_URL),"_blank","noopener")}
function downloadCard(m){const a=document.createElement("a");a.download="buynocoffee-member-"+m.n+".png";a.href=$("#card").toDataURL("image/png");a.click();toast(t("dled"))}

function applyLang(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  $$("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
  $$("[data-p]").forEach(e=>e.placeholder=t(e.dataset.p));
  $$("[data-cfg]").forEach(a=>a.href=CONFIG[a.dataset.cfg]||"#");
  $("#lang").textContent=lang==="ar"?"English":"العربية";
  if(typeof onLang==="function")onLang();
}
function setTheme(x){theme=x;document.documentElement.dataset.theme=x;$("#theme").textContent=x==="dark"?"☀️":"🌙";store.set("bnc_theme",x)}
$("#lang").onclick=()=>{lang=lang==="en"?"ar":"en";store.set("bnc_lang",lang);applyLang()};
$("#theme").onclick=()=>setTheme(theme==="dark"?"light":"dark");
if(store.get("bnc_theme")==="light")setTheme("light");
if(store.get("bnc_lang")==="ar")lang="ar";
