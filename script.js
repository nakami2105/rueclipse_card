function openLetter(){
 const envelope=document.getElementById('envelope');
 const letter=document.getElementById('letter');
 if(!envelope)return;
 envelope.classList.add('opening');
 setTimeout(()=>{envelope.style.display='none';letter.classList.remove('hidden');letter.classList.add('showLetter');},900);
}
function showSpotify(){document.getElementById('spotify').innerHTML='PEGA AQUI TU IFRAME DE SPOTIFY';}
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('.page-link').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();let url=a.href;document.getElementById('transition').classList.add('cover');setTimeout(()=>location.href=url,800);
 }));
 document.querySelectorAll('.gallery img').forEach(img=>img.onclick=()=>{let l=document.getElementById('lightbox');let i=document.getElementById('lightImage');i.src=img.src;l.classList.add('active');});
 let l=document.getElementById('lightbox');if(l)l.onclick=()=>l.classList.remove('active');
});
