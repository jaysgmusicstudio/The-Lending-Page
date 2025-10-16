
// nav highlight
document.querySelectorAll('nav a').forEach(a=>{ if(a.href===location.href) a.classList.add('active'); });

// fake contact form submission
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const btn=form.querySelector('button'); btn.disabled=true; btn.textContent='Sending...';
    setTimeout(()=>{ btn.textContent='Message sent ✓'; }, 800);
  });
}

// Reveal-on-scroll for metric cards
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); obs.unobserve(e.target); } });
  }, {threshold: 0.15});
  revealEls.forEach(el=>obs.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in-view'));
}
