/* ============================================
   TIRATH ELECTRONICS — Site-wide interactions
   ============================================ */

(() => {
  'use strict';

  const WA_NUMBER = '918872177341';

  /* ---------- 1. Nav blur on scroll ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 24) nav.classList.add('scrolled');
          else nav.classList.remove('scrolled');
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 2. Mobile nav drawer ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 3. Reveal-on-scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent ? parent.querySelectorAll('.reveal') : [];
            let index = 0;
            siblings.forEach((s, i) => {
              if (s === entry.target) index = i;
            });
            entry.target.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---------- 4. Subtle parallax on hero video (desktop) ---------- */
  const videoFrame = document.querySelector('.video-frame');
  if (videoFrame && window.matchMedia('(min-width: 1024px)').matches) {
    let raf = null;
    window.addEventListener(
      'scroll',
      () => {
        if (raf) return;
        raf = window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < 900) videoFrame.style.transform = `translateY(${y * 0.06}px)`;
          raf = null;
        });
      },
      { passive: true }
    );
  }

  /* ---------- 5. Smooth-scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- 6. Pause videos when off-screen ---------- */
  const videos = document.querySelectorAll('video');
  if ('IntersectionObserver' in window && videos.length) {
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.1 }
    );
    videos.forEach((v) => vio.observe(v));
  }

  /* ---------- 7. All WhatsApp forms (lead + queries + repair modal) ---------- */
  document.querySelectorAll('form.js-wa-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const problem = (data.get('problem') || '').toString().trim();
      const query = (data.get('query') || '').toString().trim();
      const product = (data.get('product') || '').toString().trim();
      const duration = (data.get('duration') || '').toString().trim();
      const tried = (data.get('tried') || '').toString().trim();

      if (!name || !phone) {
        const target = form.querySelector('[name="name"]:invalid, [name="phone"]:invalid')
          || form.querySelector('[name="name"]');
        if (target) target.focus();
        return;
      }

      let msg = `Namaste! Main ${name} bol raha/i hoon.\n\n`;
      msg += `📞 Phone: ${phone}\n`;
      if (email) msg += `📧 Email: ${email}\n`;
      if (product) msg += `\n🔧 Product / category: ${product}`;

      const detail = problem || query;
      if (detail) {
        const label = problem ? 'Problem' : 'Query';
        msg += `\n\n${label}:\n${detail}`;
      }

      if (duration) msg += `\n\n⏱  Kitne din se: ${duration}`;
      if (tried) msg += `\n🔁 Pehle koi mechanic try kiya: ${tried}`;

      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');

      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'WhatsApp khul gaya — bas Send press karo ✓';
        note.style.color = 'var(--forest)';
        note.style.fontStyle = 'normal';
        note.style.fontWeight = '500';
      }
    });
  });

  /* ---------- 11. Repair request modal ---------- */
  const repairModal = document.getElementById('repairModal');
  if (repairModal) {
    const modalLabel = document.getElementById('modalProductLabel');
    const modalInput = document.getElementById('modalProductInput');
    const closeBtn = repairModal.querySelector('.modal-close');

    const openModal = (productName) => {
      if (modalLabel) modalLabel.textContent = productName;
      if (modalInput) modalInput.value = productName;
      repairModal.classList.add('open');
      repairModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus first input
      setTimeout(() => {
        const firstInput = repairModal.querySelector('input[type="text"]');
        if (firstInput) firstInput.focus();
      }, 250);
    };

    const closeModal = () => {
      repairModal.classList.remove('open');
      repairModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.js-open-repair').forEach((card) => {
      card.addEventListener('click', (e) => {
        // Don't open if user clicked a link inside the card (none currently, but safe)
        if (e.target.closest('a')) return;
        const titleEl = card.querySelector('h3');
        const product = (titleEl && titleEl.textContent.trim()) || 'Repair';
        openModal(product);
      });
      // Keyboard accessibility
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    repairModal.addEventListener('click', (e) => {
      if (e.target === repairModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && repairModal.classList.contains('open')) closeModal();
    });
  }

  /* ---------- 8. Floating WhatsApp button ---------- */
  const floatWa = document.querySelector('.float-wa');
  if (floatWa) {
    let waTicking = false;
    const checkWa = () => {
      if (waTicking) return;
      waTicking = true;
      window.requestAnimationFrame(() => {
        if (window.scrollY > 400) floatWa.classList.add('show');
        else floatWa.classList.remove('show');
        waTicking = false;
      });
    };
    window.addEventListener('scroll', checkWa, { passive: true });
    checkWa();
  }

  /* ---------- 9. Products page category filter ---------- */
  const tabs = document.querySelectorAll('.category-tab');
  const cards = document.querySelectorAll('.product-card');
  if (tabs.length && cards.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const cat = tab.dataset.category;
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        cards.forEach((card) => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ---------- 10. Mark active nav link based on current page ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('http')) return;
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
