(function(){
  const saved=localStorage.getItem('side-b-theme')||'paper';
  document.documentElement.dataset.initialTheme=saved;
  document.addEventListener('DOMContentLoaded',()=>{document.body.dataset.theme=saved==='night'?'night':'paper'});
})();
