// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  // Back to top button
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
  // Active nav link
  updateActiveNav();
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksMenu.classList.toggle('open');
});

navLinksMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksMenu.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const sections = ['home', 'lic', 'starhealth', 'vehicle', 'investments', 'contact', 'query'];
  let current = '';
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) current = id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== VEHICLE TABS =====
const vtabs = document.querySelectorAll('.vtab');
const vtabContents = document.querySelectorAll('.vtab-content');

vtabs.forEach(tab => {
  tab.addEventListener('click', () => {
    vtabs.forEach(t => t.classList.remove('active'));
    vtabContents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

// ===== SIP CALCULATOR =====
function formatINR(num) {
  if (num >= 10000000) return '₹' + (num / 10000000).toFixed(2) + ' Cr';
  if (num >= 100000) return '₹' + (num / 100000).toFixed(2) + ' L';
  return '₹' + num.toLocaleString('en-IN');
}

function calcSIP() {
  const monthly = parseFloat(document.getElementById('sipAmount').value);
  const rate = parseFloat(document.getElementById('sipReturn').value) / 100 / 12;
  const months = parseInt(document.getElementById('sipYears').value) * 12;

  const maturity = monthly * (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));
  const invested = monthly * months;
  const returns = maturity - invested;

  document.getElementById('sipAmountVal').textContent = monthly.toLocaleString('en-IN');
  document.getElementById('sipReturnVal').textContent = document.getElementById('sipReturn').value;
  document.getElementById('sipYearsVal').textContent = document.getElementById('sipYears').value;
  document.getElementById('sipInvested').textContent = formatINR(Math.round(invested));
  document.getElementById('sipReturns').textContent = formatINR(Math.round(returns));
  document.getElementById('sipMaturity').textContent = formatINR(Math.round(maturity));
}

['sipAmount', 'sipReturn', 'sipYears'].forEach(id => {
  document.getElementById(id).addEventListener('input', calcSIP);
});
calcSIP();

// ===== QUERY FORM =====
document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('qName').value;
  const phone = document.getElementById('qPhone').value;
  const email = document.getElementById('qEmail').value;
  const service = document.getElementById('qService').value;
  const message = document.getElementById('qMessage').value;

  // Build WhatsApp message
  const waText = encodeURIComponent(
    `Hello Sai Sanket Insurance!\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Email:* ${email || 'N/A'}\n` +
    `*Interested In:* ${service}\n` +
    `*Message:* ${message}`
  );

  // Show success
  document.getElementById('queryForm').style.display = 'none';
  document.getElementById('querySuccess').style.display = 'block';

  // Open WhatsApp after short delay
  setTimeout(() => {
    window.open(`https://wa.me/919867431898?text=${waText}`, '_blank');
  }, 800);
});

// ===== SMOOTH SCROLL OFFSET =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.plan-card, .service-card, .age-card, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
