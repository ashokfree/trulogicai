// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Contact form handler — redirects to mailto as fallback (static site)
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const product = form.querySelector('select').value;
  const message = form.querySelector('textarea').value;

  const subject = encodeURIComponent(`TruLogic AI Enquiry — ${product || 'General'}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProduct Interest: ${product}\n\nMessage:\n${message}`
  );

  // Show success message
  document.getElementById('formSuccess').classList.add('show');

  // Open mailto after brief delay
  setTimeout(() => {
    window.location.href = `mailto:sales@trulogicai.com?subject=${subject}&body=${body}`;
  }, 600);
}

// Smooth reveal on scroll
const revealEls = document.querySelectorAll('.product-card, .pillar, .pricing-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.classList.contains('pricing-featured')
        ? 'translateY(-8px)'
        : 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
