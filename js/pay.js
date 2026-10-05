/* Payment page: demo checkout, or redirect to your Stripe Payment Link */
const d=store.get("bnc_draft");
function pay(btn){
  if(!d)return;
  $$(".pm").forEach(b=>b.disabled=true);btn.textContent=t("proc");
  if(CONFIG.PAYMENT_LINK){
    location.href=CONFIG.PAYMENT_LINK+(CONFIG.PAYMENT_LINK.includes("?")?"&":"?")+"client_reference_id="+Date.now();
    return;
  }
  setTimeout(()=>{const m=finalizeMember();location.href="member.html?n="+m.n},1300);
}
function onLang(){
  $("#none").hidden=!!d;$("#order").hidden=!d;$("#demo").hidden=!!CONFIG.PAYMENT_LINK;
  if(d){$("#sname").textContent=d.emoji+" "+d.name;drawCard({n:nextN(),name:d.name,msg:d.msg||t("defmsg"),emoji:d.emoji,ts:Date.now()})}
}
$$(".pm").forEach(b=>b.onclick=()=>pay(b));
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>d&&onLang());
applyLang();
