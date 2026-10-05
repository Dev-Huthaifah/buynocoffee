/* Membership card renderer (canvas) */
function rr(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r)}
function drawCard(m){
  const cv=$("#card"),c=cv.getContext("2d"),W=1000,H=600,rtl=lang==="ar",ff=rtl?"Cairo, sans-serif":"Fraunces, Georgia, serif",bf=rtl?"Cairo, sans-serif":"Inter, sans-serif";
  c.clearRect(0,0,W,H);
  let g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,"#2b1a0a");g.addColorStop(.6,"#120b04");g.addColorStop(1,"#3a2209");
  rr(c,0,0,W,H,44);c.fillStyle=g;c.fill();
  g=c.createLinearGradient(0,0,W,0);g.addColorStop(0,"#F59E0B");g.addColorStop(.5,"#fde68a");g.addColorStop(1,"#D97706");
  rr(c,14,14,W-28,H-28,34);c.strokeStyle=g;c.lineWidth=5;c.stroke();
  c.save();rr(c,0,0,W,H,44);c.clip();g=c.createLinearGradient(0,H,W,0);g.addColorStop(.35,"rgba(255,255,255,0)");g.addColorStop(.5,"rgba(253,230,138,.14)");g.addColorStop(.65,"rgba(255,255,255,0)");c.fillStyle=g;c.fillRect(0,0,W,H);c.restore();
  c.direction=rtl?"rtl":"ltr";const st=rtl?"right":"left",X=rtl?W-70:70;c.textAlign=st;c.textBaseline="alphabetic";
  c.fillStyle="#F59E0B";c.font=`800 44px ${ff}`;c.fillText("BuyNoCoffee",X,110);
  c.fillStyle="#b8a48a";c.font=`500 22px ${bf}`;c.fillText(t("cardtop"),X,150);
  c.font="64px sans-serif";c.textAlign=rtl?"left":"right";c.fillText(m.emoji,rtl?70:W-70,120);
  c.textAlign=st;c.fillStyle="#fde68a";c.font=`800 84px ${ff}`;c.fillText(m.preview&&!m.n?"No. ----":"No. "+pad(m.n),X,290);
  c.fillStyle="#f6efe6";c.font=`800 54px ${ff}`;c.fillText(clip(c,m.name,W-200),X,380);
  c.fillStyle="#cdbba3";c.font=`italic 500 30px ${bf}`;c.fillText("“"+clip(c,m.msg,W-220)+"”",X,435);
  c.fillStyle="#8d7c66";c.font=`500 22px ${bf}`;c.fillText(t("issued")+": "+fmtDate(m.ts),X,530);
  const bx=rtl?110:W-110;g=c.createRadialGradient(bx,505,5,bx,505,52);g.addColorStop(0,"#fff3c4");g.addColorStop(1,"#D97706");
  c.beginPath();c.arc(bx,505,48,0,7);c.fillStyle=g;c.fill();c.fillStyle="#2a1a0b";c.textAlign="center";c.font="800 50px sans-serif";c.fillText("✓",bx,524);
}
function clip(c,s,max){if(c.measureText(s).width<=max)return s;while(s.length&&c.measureText(s+"…").width>max)s=s.slice(0,-1);return s+"…"}
const cardEl=$("#card");
cardEl.onmousemove=e=>{const r=cardEl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cardEl.style.transform=`perspective(800px) rotateY(${x*14}deg) rotateX(${-y*14}deg)`};
cardEl.onmouseleave=()=>cardEl.style.transform="";

