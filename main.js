window.addEventListener('scroll',()=>{
  document.getElementById('btop').classList.toggle('visible',window.scrollY>400);
});
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  m.style.display=m.style.display==='none'?'block':'none';
}
function sendForm(){
  const n=document.getElementById('fn').value.trim();
  const p=document.getElementById('fp').value.trim();
  const s=document.getElementById('fs').value;
  if(!n||!p||!s){alert('Completa tu nombre, teléfono y servicio de interés.');return;}
  const t=document.getElementById('toast');
  t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000);
  ['fn','fl','fp','fv','fm'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fs').value='';
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});