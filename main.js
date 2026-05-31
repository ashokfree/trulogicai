// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobile() { mobileMenu.classList.remove('open'); }
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Contact form — opens mailto pre-filled
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const product = form.querySelector('select').value;
  const message = form.querySelector('textarea').value;
  const subject = encodeURIComponent(`TruLogic AI Enquiry — ${product || 'General'}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nMessage:\n${message}`);
  document.getElementById('formSuccess').classList.add('show');
  setTimeout(() => { window.location.href = `mailto:sales@trulogicai.com?subject=${subject}&body=${body}`; }, 600);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.pcard, .fw-card, .pillar, .pricing-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.classList.contains('pricing-featured')
        ? 'translateY(0)' : 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
