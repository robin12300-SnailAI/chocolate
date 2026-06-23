// ============================================================
// Australia Workwear - Main JavaScript
// Handles: mobile nav, FAQ accordion, quote form, product data
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQAccordion();
  initQuoteForm();
  initSmoothScroll();
});

/* ---------- Mobile Navigation ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-main');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) nav.classList.remove('open');
    });
  });
}

/* ---------- FAQ Accordion ---------- */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all
      items.forEach(i => i.classList.remove('active'));
      // Toggle current
      if (!isActive) item.classList.add('active');
    });
  });
}

/* ---------- Quote Form ---------- */
function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  // Pre-fill from URL params (e.g. ?product=Hi+Vis+S/S+Polo&code=8060)
  const params = new URLSearchParams(window.location.search);
  const productName = params.get('product');
  const productCode = params.get('code');

  if (productName) {
    const catField = form.querySelector('[name="productCategory"]');
    if (catField && !catField.value) catField.value = 'See below';
    const msgField = form.querySelector('[name="message"]');
    if (msgField) msgField.value = `I am interested in: ${productName}${productCode ? ` (Code: ${productCode})` : ''}`;
  }
  if (productCode) {
    const codeField = form.querySelector('[name="productCode"]');
    if (codeField) codeField.value = productCode;
  }

  // Form validation & submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#dc3545';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }

    // Email validation
    const emailField = form.querySelector('[name="email"]') || form.querySelector('[type="email"]');
    if (emailField && emailField.value && !isValidEmail(emailField.value)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Build mailto link as fallback (no backend)
    const formData = new FormData(form);
    const subject = encodeURIComponent(`Workwear Quote Request${formData.get('companyName') ? ' - ' + formData.get('companyName') : ''}`);
    let bodyParts = [];
    bodyParts.push(`Name: ${formData.get('name')}`);
    bodyParts.push(`Company: ${formData.get('companyName') || 'N/A'}`);
    bodyParts.push(`Email: ${formData.get('email')}`);
    bodyParts.push(`Phone: ${formData.get('phone') || 'N/A'}`);
    bodyParts.push(`City/State: ${formData.get('cityState') || 'N/A'}`);
    bodyParts.push(`Industry: ${formData.get('industry') || 'N/A'}`);
    bodyParts.push(`Product Category: ${formData.get('productCategory') || 'N/A'}`);
    bodyParts.push(`Product Code: ${formData.get('productCode') || 'N/A'}`);
    bodyParts.push(`Quantity: ${formData.get('quantity') || 'N/A'}`);
    bodyParts.push(`Sizes: ${formData.get('sizesRequired') || 'N/A'}`);
    bodyParts.push(`Colours: ${formData.get('coloursRequired') || 'N/A'}`);
    bodyParts.push(`Delivery or Pickup: ${formData.get('deliveryPickup') || 'N/A'}`);
    bodyParts.push(`\nMessage:\n${formData.get('message') || 'N/A'}`);

    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${encodeURIComponent(bodyParts.join('\n'))}`;

    showFormMessage('Opening your email client to send the enquiry...', 'success');
    setTimeout(() => { window.location.href = mailtoLink; }, 800);
  });
}

/* ---------- Helper Functions ---------- */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(msg, type) {
  let el = document.getElementById('formMessage');
  if (!el) {
    el = document.createElement('div'); el.id = 'formMessage';
    const container = document.querySelector('.quote-form-container');
    if (container) container.insertBefore(el, container.firstChild);
  }
  el.className = type === 'error' ? 'alert-error' : 'alert-success';
  el.style.cssText = `padding:1rem;border-radius:8px;margin-bottom:1rem;font-weight:600;text-align:center;${
    type === 'error' ? 'background:#fdecea;color:#dc3545;border:1px solid #f5c2c7;' :
    'background:#d4edda;color:#155724;border:1px solid #c3e6cb;'
  }`;
  el.textContent = msg;
  setTimeout(() => { if (el.parentNode) el.remove(); }, 5000);
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

/* ---------- Enquire Now Button Handler ---------- */
// Auto-fills quote form when "Enquire Now" is clicked on any page
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-enquire]');
  if (!btn) return;
  e.preventDefault();
  const name = btn.dataset.enquire || '';
  const code = btn.dataset.code || '';
  window.location.href = `contact.html?product=${encodeURIComponent(name)}&code=${encodeURIComponent(code)}#quote`;
});
