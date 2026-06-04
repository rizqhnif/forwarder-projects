/* design-system.js — Cohere design system interactivity */

(function () {
  'use strict';

  // ── Announcement Bar dismiss ──────────────────────────
  const bar = document.getElementById('announcement-bar');
  const closeBtn = document.getElementById('close-announcement');
  if (bar && closeBtn) {
    closeBtn.addEventListener('click', () => {
      bar.hidden = true;
    });
  }

  // ── Mobile nav toggle ─────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ── Blog filter chips ─────────────────────────────────
  const filterChips = document.querySelectorAll('.blog-filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
    });
  });

  // ── Contact form — basic client-side validation ───────
  const contactForm = document.querySelector('.contact-form-card form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Submitted ✓';
      btn.disabled = true;
      btn.style.opacity = '0.7';
    });
  }

  // ── Newsletter form ───────────────────────────────────
  const newsletterForm = document.querySelector('.footer__newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const submitBtn = newsletterForm.querySelector('button');
      if (input && input.value) {
        submitBtn.textContent = '✓';
        input.value = '';
        input.placeholder = 'You\'re subscribed!';
        input.disabled = true;
        submitBtn.disabled = true;
      }
    });
  }

})();
