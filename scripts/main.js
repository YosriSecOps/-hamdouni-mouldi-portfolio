/**
 * MAIN INTERACTIVE LOGIC - HAMDOUNI MOULDI PORTFOLIO
 * High-performance, zero external dependency, fully accessible
 */

(function () {
  'use strict';

  let currentLang = 'fr';
  let activeMilestoneIdx = 5;
  let activeGalleryCat = 'all';
  let carouselIdx = 0;

  // Gallery items database with high-resolution photography
  const galleryItems = [
    {
      id: 1,
      cat: 'agro',
      title: 'Récolte d\'olives à maturité',
      desc: 'Variétés tunisiennes Chemlali et Chétoui gorgées de soleil, prêtes pour la trituration à froid.',
      src: 'public/images/gallery/gallery-olives-harvest.webp',
      fullSrc: 'public/images/gallery/gallery-olives-harvest.webp'
    },
    {
      id: 2,
      cat: 'machines',
      title: 'Labour profond au soleil couchant',
      desc: 'Tracteur de forte puissance et herses à disques préparant le sol fertile pour les grandes cultures.',
      src: 'public/images/expertise/expertise-machinisme.webp',
      fullSrc: 'public/images/expertise/expertise-machinisme.webp'
    },
    {
      id: 3,
      cat: 'elevage',
      title: 'Troupeau laitier en pâturage verdoyant',
      desc: 'Génisses et vaches laitières de haute valeur génétique sur les prairies fertiles du nord tunisien.',
      src: 'public/images/gallery/gallery-dairy-pasture.webp',
      fullSrc: 'public/images/gallery/gallery-dairy-pasture.webp'
    },
    {
      id: 4,
      cat: 'territoires',
      title: 'Domaine et complexe agro-industriel',
      desc: 'Bâtiments administratifs et techniques coordonnant les grands domaines agricoles de l\'OTD.',
      src: 'public/images/gallery/gallery-agro-complex.webp',
      fullSrc: 'public/images/gallery/gallery-agro-complex.webp'
    },
    {
      id: 5,
      cat: 'territoires',
      title: 'Complexe Ghazala (Mateur / Bizerte)',
      desc: 'Vergers d\'agrumes, oliveraies et grandes cultures céréalières au pied du mont Ichkeul.',
      src: 'public/images/career/career-ghazala-bizerte.webp',
      fullSrc: 'public/images/career/career-ghazala-bizerte.webp'
    },
    {
      id: 6,
      cat: 'territoires',
      title: 'Complexe Tawila (Sidi Bouzid)',
      desc: 'Plantations d\'oliviers et d\'amandiers en milieu semi-aride avec stations de pompage modernes.',
      src: 'public/images/career/career-tawila-sidibouzid.webp',
      fullSrc: 'public/images/career/career-tawila-sidibouzid.webp'
    },
    {
      id: 7,
      cat: 'territoires',
      title: 'Domaine de Thibar (Béja)',
      desc: 'Vignobles et coteaux arboricoles historiques dans la vallée fertile de la Medjerda.',
      src: 'public/images/career/career-thibar-beja.webp',
      fullSrc: 'public/images/career/career-thibar-beja.webp'
    },
    {
      id: 8,
      cat: 'agro',
      title: 'Huilerie continue et extraction à froid',
      desc: 'Lignes industrielles en inox, décanteurs et centrifugeuses pour une huile d\'olive vierge extra d\'exception.',
      src: 'public/images/expertise/expertise-agroalimentaire.webp',
      fullSrc: 'public/images/expertise/expertise-agroalimentaire.webp'
    },
    {
      id: 9,
      cat: 'machines',
      title: 'Pivot d\'irrigation haute performance',
      desc: 'Système d\'irrigation circulaire sous pression pour une valorisation optimale de la ressource en eau.',
      src: 'public/images/expertise/expertise-hydraulique.webp',
      fullSrc: 'public/images/expertise/expertise-hydraulique.webp'
    },
    {
      id: 10,
      cat: 'elevage',
      title: 'Unité avicole moderne climatisée',
      desc: 'Hall d\'élevage à régulation dynamique et alimentation automatisée garantissant une haute biosécurité.',
      src: 'public/images/expertise/expertise-elevage-avicole.webp',
      fullSrc: 'public/images/expertise/expertise-elevage-avicole.webp'
    },
    {
      id: 11,
      cat: 'elevage',
      title: 'Élevage bovin et stabulation libre',
      desc: 'Vaches laitières Holstein en stabulation ventilée, nutrition fourragère équilibrée et confort animal.',
      src: 'public/images/expertise/expertise-elevage-bovin.webp',
      fullSrc: 'public/images/expertise/expertise-elevage-bovin.webp'
    },
    {
      id: 12,
      cat: 'territoires',
      title: 'Vue aérienne d\'aménagements et serres',
      desc: 'Multi-chapelles horticoles, parcelles irriguées et infrastructures de gestion territoriale.',
      src: 'public/images/expertise/expertise-gestion-projets.webp',
      fullSrc: 'public/images/expertise/expertise-gestion-projets.webp'
    }
  ];

  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    setupHeaderScroll();
    setupMobileNav();
    setupLanguageSwitcher();
    renderPageText();
    setupExpertiseCards();
    setupCareerStory();
    setupResultsObserver();
    setupGallery();
    setupModal();
    setupContactForm();
    setupSmoothScroll();
  }

  /* ------------------------------------------------------------------------
     1. Navigation Scroll & Active Links
     ------------------------------------------------------------------------ */
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      updateActiveNavLink();
    }, { passive: true });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Mobile Menu
     ------------------------------------------------------------------------ */
  function setupMobileNav() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Language Switcher (FR / AR / EN with RTL)
     ------------------------------------------------------------------------ */
  function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = btn.getAttribute('data-lang');
        if (selected && selected !== currentLang) {
          switchLanguage(selected);
        }
      });
    });
  }

  function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // Update document attributes
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    renderPageText();
    renderExpertiseCards();
    renderCareerMilestones();
    renderCareerStrip();
    renderResultsMetrics();
  }

  function renderPageText() {
    const t = translations[currentLang];
    if (!t) return;

    // Brand
    safeText('#brandSubtitle', t.brandSubtitle);

    // Nav
    safeText('#navHome', t.nav.home);
    safeText('#navCareer', t.nav.career);
    safeText('#navExpertise', t.nav.expertise);
    safeText('#navResults', t.nav.results);
    safeText('#navGallery', t.nav.gallery);
    safeText('#navContact', t.nav.contact);

    // Hero
    safeText('#heroTag', t.hero.tag);
    safeText('#heroTitle', t.hero.title);
    safeText('#heroSubtitle', t.hero.subtitle);
    safeText('#heroCtaText', t.hero.cta);
    safeText('#heroScriptNote', t.hero.scriptNote);

    // Expertise Header
    safeText('#expertiseTag', t.expertise.tag);
    safeText('#expertiseTitle', t.expertise.title);
    safeText('#expertiseDesc', t.expertise.desc);

    // Career
    safeText('#careerTag', t.career.tag);
    safeText('#careerTitle', t.career.title);
    safeText('#careerDesc', t.career.desc);
    safeText('#mapCardTitle', t.career.mapTitle);
    safeText('#mapCardHint', t.career.mapHint);
    safeText('#timelineStepperTitle', t.career.stepsTitle || "LES ÉTAPES DE MA CARRIÈRE");
    safeText('#stripTitle', t.career.stripTitle || "MON PARCOURS EN DÉTAIL");
    safeText('#careerBannerQuote', t.career.bannerQuote);
    safeText('#careerBannerCtaText', t.career.bannerCta);
    safeText('#careerSignature', t.career.signature || "Hamdouni Mouldi");
    safeText('#mapDetailCtaText', t.career.learnMore || "Voir plus");
    if (t.career.specLabels) {
      safeText('#specLabel1', t.career.specLabels.specialisation);
      safeText('#specLabel2', t.career.specLabels.surface);
      safeText('#specLabel3', t.career.specLabels.equipe);
      safeText('#specLabel4', t.career.specLabels.results);
    }

    // Results
    safeText('#resultsTag', t.results.tag);
    safeText('#resultsTitle', t.results.title);
    safeText('#resultsDesc', t.results.desc);
    safeText('#resultsCtaText', t.results.cta);

    // Engagement
    safeText('#engagementTag', t.engagement.tag);
    safeText('#engagementTitle', t.engagement.title);
    safeText('#engagementQuote', t.engagement.quote);
    safeText('#engagementAuthor', t.engagement.author);
    safeText('#galleryTag', t.engagement.galleryTag);

    // Contact
    safeText('#contactTag', t.contact.tag);
    safeText('#contactTitle', t.contact.title);
    safeText('#contactDesc', t.contact.desc);
    safeText('#contactLocTitle', t.contact.locationTitle);
    safeText('#contactLocVal', t.contact.location);
    safeText('#contactPhoneTitle', t.contact.phoneTitle);
    safeText('#contactEmailTitle', t.contact.emailTitle);
    safeText('#formNameLabel', t.contact.formName);
    safeText('#formEmailLabel', t.contact.formEmail);
    safeText('#formSubjLabel', t.contact.formSubject);
    safeText('#formMsgLabel', t.contact.formMessage);
    safeText('#formSubmitBtn', t.contact.formSubmit);

    // Contact Form Placeholders
    safePlaceholder('#userName', t.contact.namePlaceholder);
    safePlaceholder('#userEmail', t.contact.emailPlaceholder);
    safePlaceholder('#userSubject', t.contact.subjectPlaceholder);
    safePlaceholder('#userMessage', t.contact.messagePlaceholder);

    // Footer
    safeText('#footerRights', t.footer.rights);
    safeText('#footerBackTop', t.footer.backTop);
  }

  function safeText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text !== undefined) {
      el.textContent = text;
    }
  }

  function safePlaceholder(selector, placeholder) {
    const el = document.querySelector(selector);
    if (el && placeholder !== undefined) {
      el.setAttribute('placeholder', placeholder);
    }
  }

  /* ------------------------------------------------------------------------
     4. Expertise Cards & Detail Modal (Stage 4)
     ------------------------------------------------------------------------ */
  function setupExpertiseCards() {
    renderExpertiseCards();
  }

  function renderExpertiseCards() {
    const container = document.getElementById('expertiseGrid');
    if (!container) return;

    const t = translations[currentLang].expertise;
    const cards = t.cards;

    // Card photo mappings (clean high-res without baked-in duplicate badges)
    const photoMap = {
      machinisme: 'public/images/expertise/expertise-machinisme.webp',
      hydraulique: 'public/images/expertise/expertise-hydraulique.webp',
      avicole: 'public/images/expertise/expertise-elevage-avicole.webp',
      bovin: 'public/images/expertise/expertise-elevage-bovin.webp',
      agroalimentaire: 'public/images/expertise/expertise-agroalimentaire.webp',
      gestion: 'public/images/expertise/expertise-gestion-projets.webp'
    };

    // Card SVG icon definitions
    const iconMap = {
      machinisme: `<svg viewBox="0 0 24 24"><path d="M4 17h16M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 11l2-4h5l2 4M10 7v4"/></svg>`,
      hydraulique: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      avicole: `<svg viewBox="0 0 24 24"><path d="M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 6c-2-2-4-2-4 0M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 11l4 2-4 2"/></svg>`,
      bovin: `<svg viewBox="0 0 24 24"><path d="M6 5h12v7a6 6 0 0 1-12 0V5zM4 7l2 1M20 7l-2 1M9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`,
      agroalimentaire: `<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V9l5 4V9l5 4V5h4v16"/></svg>`,
      gestion: `<svg viewBox="0 0 24 24"><path d="M12 22v-9M12 13a7 7 0 0 0 7-7c0-2-3-2-7 2-4-4-7-2-7 2a7 7 0 0 0 7 7z"/></svg>`
    };

    container.innerHTML = cards.map(c => `
      <article class="expertise-card" data-card-id="${c.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="${c.title}">
        <div class="card-media">
          <img src="${photoMap[c.id] || 'public/images/expertise/expertise-machinisme.webp'}" alt="${c.title}" loading="lazy">
          <div class="card-badge" aria-hidden="true">
            ${iconMap[c.id]}
          </div>
        </div>
        <div class="card-content">
          <span class="card-number">${c.num}</span>
          <h3 class="card-title">${c.title}</h3>
          <p class="card-text">${c.desc}</p>
          <span class="card-link">
            <span>${t.learnMore}</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    `).join('');

    // Attach click and keyboard listeners
    container.querySelectorAll('.expertise-card').forEach(card => {
      const handleOpen = () => {
        const id = card.getAttribute('data-card-id');
        const cardData = cards.find(item => item.id === id);
        if (cardData) {
          openExpertiseModal(cardData, photoMap[id]);
        }
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Modal Management
     ------------------------------------------------------------------------ */
  function setupModal() {
    const backdrop = document.getElementById('appModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!backdrop || !closeBtn) return;

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function openExpertiseModal(cardData, imgSrc) {
    const backdrop = document.getElementById('appModal');
    const modalImg = document.getElementById('modalImg');
    const modalNum = document.getElementById('modalNum');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPoints = document.getElementById('modalPoints');

    if (modalImg) modalImg.src = imgSrc || 'public/images/expertise/expertise-machinisme.webp';
    if (modalNum) modalNum.textContent = cardData.num;
    if (modalTitle) modalTitle.textContent = cardData.title;
    if (modalDesc) modalDesc.textContent = cardData.detail || cardData.desc;

    if (modalPoints && cardData.keyPoints) {
      modalPoints.innerHTML = cardData.keyPoints.map(pt => `
        <li>
          <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>${pt}</span>
        </li>
      `).join('');
    }

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const backdrop = document.getElementById('appModal');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ------------------------------------------------------------------------
     6. Career Story & Interactive Tunisia Map (Stage 3)
     ------------------------------------------------------------------------ */
  function setupCareerStory() {
    renderCareerMilestones();
    renderCareerStrip();
    setupMapInteractions();
    setupCareerStripControls();
  }

  function renderCareerMilestones() {
    const timelineEl = document.getElementById('timelineList');
    if (!timelineEl) return;

    const t = translations[currentLang].career;
    const milestones = t.milestones || [];

    timelineEl.innerHTML = milestones.map((m, idx) => {
      const isActive = idx === activeMilestoneIdx;
      return `
        <div class="stepper-item ${isActive ? 'active' : ''}" data-idx="${idx}" data-region="${m.region}" role="tab" aria-selected="${isActive ? 'true' : 'false'}" tabindex="0">
          <div class="stepper-badge" aria-hidden="true">${idx + 1}</div>
          <div class="stepper-content">
            <div class="stepper-city">${m.regionLabel || m.region}</div>
            <div class="stepper-role">${m.role}</div>
            <div class="stepper-period">— ${m.period}</div>
          </div>
        </div>
      `;
    }).join('');

    timelineEl.querySelectorAll('.stepper-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-idx'), 10);
        selectMilestone(idx);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(item.getAttribute('data-idx'), 10);
          selectMilestone(idx);
        }
      });
    });

    updateMapInfoBox();
  }

  function renderCareerStrip() {
    const stripTrack = document.getElementById('careerStripTrack');
    if (!stripTrack) return;

    const t = translations[currentLang].career;
    const milestones = t.milestones || [];

    stripTrack.innerHTML = milestones.map((m, idx) => {
      const isActive = idx === activeMilestoneIdx;
      return `
        <div class="strip-card ${isActive ? 'active' : ''}" data-idx="${idx}" role="button" tabindex="0">
          <div class="strip-card-media">
            <img src="${m.img}" alt="${m.title}" loading="lazy">
            <span class="strip-badge">${idx + 1}</span>
          </div>
          <div class="strip-card-body">
            <h4 class="strip-city">${m.regionLabel || m.region}</h4>
            <div class="strip-period">${m.period}</div>
            <p class="strip-snippet">${m.role}</p>
          </div>
        </div>
      `;
    }).join('');

    stripTrack.querySelectorAll('.strip-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-idx'), 10);
        selectMilestone(idx);
        const milestones = translations[currentLang].career.milestones;
        if (milestones && milestones[idx]) {
          openCareerModal(milestones[idx]);
        }
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-idx'), 10);
          selectMilestone(idx);
          const milestones = translations[currentLang].career.milestones;
          if (milestones && milestones[idx]) {
            openCareerModal(milestones[idx]);
          }
        }
      });
    });
  }

  function setupCareerStripControls() {
    const prevBtn = document.getElementById('careerStripPrev');
    const nextBtn = document.getElementById('careerStripNext');
    const track = document.getElementById('careerStripTrack');

    if (prevBtn && track) {
      prevBtn.addEventListener('click', () => {
        const newIdx = Math.max(0, activeMilestoneIdx - 1);
        selectMilestone(newIdx);
        scrollStripToActive();
      });
    }

    if (nextBtn && track) {
      nextBtn.addEventListener('click', () => {
        const milestones = translations[currentLang].career.milestones;
        const newIdx = Math.min(milestones.length - 1, activeMilestoneIdx + 1);
        selectMilestone(newIdx);
        scrollStripToActive();
      });
    }

    const detailBtn = document.getElementById('mapDetailCtaBtn');
    if (detailBtn) {
      detailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const milestones = translations[currentLang].career.milestones;
        const m = milestones[activeMilestoneIdx];
        if (m) openCareerModal(m);
      });
    }

    const detailMedia = document.querySelector('.detail-card-media');
    if (detailMedia) {
      detailMedia.style.cursor = 'pointer';
      detailMedia.setAttribute('title', 'Cliquez pour voir les détails complets');
      detailMedia.addEventListener('click', () => {
        const milestones = translations[currentLang].career.milestones;
        const m = milestones[activeMilestoneIdx];
        if (m) openCareerModal(m);
      });
    }
  }

  function scrollStripToActive() {
    const track = document.getElementById('careerStripTrack');
    const activeCard = track ? track.querySelector(`.strip-card[data-idx="${activeMilestoneIdx}"]`) : null;
    if (activeCard && track) {
      activeCard.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }

  function setupMapInteractions() {
    const pins = document.querySelectorAll('.map-pin');
    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        const idx = pin.getAttribute('data-idx');
        if (idx !== null) {
          selectMilestone(parseInt(idx, 10));
        }
      });
    });

    // Also governorates clickable
    const govs = document.querySelectorAll('.gov-boundary');
    govs.forEach(gov => {
      gov.addEventListener('click', () => {
        const govName = gov.getAttribute('data-name');
        if (!govName) return;
        const milestones = translations[currentLang].career.milestones;
        const matchIdx = milestones.findIndex(m => 
          m.region.toLowerCase() === govName.toLowerCase() ||
          (m.regionLabel && m.regionLabel.toLowerCase() === govName.toLowerCase())
        );
        if (matchIdx !== -1) {
          selectMilestone(matchIdx);
        }
      });
    });
  }

  function selectMilestone(idx) {
    const milestones = translations[currentLang].career.milestones;
    if (idx < 0 || idx >= milestones.length) return;
    activeMilestoneIdx = idx;

    // 1. Update Stepper List
    const stepperItems = document.querySelectorAll('.stepper-item');
    stepperItems.forEach((it, i) => {
      const isActive = i === idx;
      it.classList.toggle('active', isActive);
      it.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // 2. Update Strip Cards
    const stripCards = document.querySelectorAll('.strip-card');
    stripCards.forEach((c, i) => {
      c.classList.toggle('active', i === idx);
    });
    scrollStripToActive();

    // 3. Highlight Map Pins & Governorates
    const activeData = milestones[idx];
    highlightMapPinAndGov(activeData, idx);

    // 4. Update Career Details Card
    updateMapInfoBox();
  }

  function highlightMapPinAndGov(milestone, idx) {
    // Highlight Pin
    document.querySelectorAll('.map-pin').forEach(pin => {
      const pinIdx = parseInt(pin.getAttribute('data-idx'), 10);
      pin.classList.toggle('active', pinIdx === idx);
    });

    // Highlight Governorate boundary
    const regName = (milestone.region || '').toLowerCase();
    document.querySelectorAll('.gov-boundary').forEach(gov => {
      const gName = (gov.getAttribute('data-name') || '').toLowerCase();
      gov.classList.toggle('active-gov', gName === regName);
    });
  }

  function updateMapInfoBox() {
    const milestones = translations[currentLang].career.milestones;
    const m = milestones[activeMilestoneIdx] || milestones[0];
    if (!m) return;

    safeText('#mapInfoTitle', m.title || `${m.region} — ${m.role}`);
    safeText('#mapInfoPeriod', m.period);
    safeText('#mapInfoSubtitle', m.subtitle || m.role);
    safeText('#mapInfoDesc', m.desc);

    // Update Photo
    const thumb = document.getElementById('mapInfoImg');
    if (thumb) {
      thumb.src = m.img || 'public/images/career/career-ghazala-bizerte.webp';
      thumb.alt = m.title || m.region;
    }

    // Update Specs
    if (m.specs) {
      safeText('#specValSpecialisation', m.specs.specialisation || 'Agriculture diversifiée');
      safeText('#specValSurface', m.specs.surface || 'À préciser');
      safeText('#specValEquipe', m.specs.equipe || 'À préciser');

      const resultsList = document.getElementById('specValResults');
      if (resultsList && Array.isArray(m.specs.results)) {
        resultsList.innerHTML = m.specs.results.map(r => `<li>${r}</li>`).join('');
      }
    }

    highlightMapPinAndGov(m, activeMilestoneIdx);
  }

  function openCareerModal(m) {
    const backdrop = document.getElementById('appModal');
    const modalImg = document.getElementById('modalImg');
    const modalNum = document.getElementById('modalNum');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPoints = document.getElementById('modalPoints');

    if (modalImg) modalImg.src = m.img || 'public/images/career/career-ghazala-bizerte.webp';
    if (modalNum) modalNum.textContent = String(m.id || activeMilestoneIdx + 1).padStart(2, '0');
    if (modalTitle) modalTitle.textContent = m.title;
    if (modalDesc) {
      modalDesc.innerHTML = `<p style="color: var(--color-gold); font-weight: 700; margin-bottom: 8px;">${m.period} · ${m.subtitle}</p><p style="color: #ffffff; line-height: 1.6;">${m.desc}</p>`;
    }

    if (modalPoints) {
      const items = [];
      if (m.specs) {
        const t = translations[currentLang].career.specLabels || {};
        if (m.specs.specialisation) {
          items.push(`<strong>${t.specialisation || 'Spécialisation'}:</strong> ${m.specs.specialisation}`);
        }
        if (m.specs.surface) {
          items.push(`<strong>${t.surface || 'Surface'}:</strong> ${m.specs.surface}`);
        }
        if (m.specs.equipe) {
          items.push(`<strong>${t.equipe || 'Équipe'}:</strong> ${m.specs.equipe}`);
        }
        if (Array.isArray(m.specs.results)) {
          m.specs.results.forEach(r => items.push(r));
        }
      }
      modalPoints.innerHTML = items.map(pt => `
        <li>
          <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#c5a059" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>${pt}</span>
        </li>
      `).join('');
    }

    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  /* ------------------------------------------------------------------------
     7. Results / Metrics Animated Count-Up (Stage 5)
     ------------------------------------------------------------------------ */
  function renderResultsMetrics() {
    const t = translations[currentLang].results;
    const metrics = t.metrics;

    // SVG icons matching the screenshot
    const icons = [
      `<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M3 21h18"/></svg>`, // Fields / furrows
      `<svg viewBox="0 0 24 24"><path d="M6 7h12v6a6 6 0 0 1-12 0V7zM4 9l2 1M20 9l-2 1"/></svg>`, // Livestock
      `<svg viewBox="0 0 24 24"><path d="M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`, // Poultry
      `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 1 6 6c0 5-6 12-6 12S6 14 6 9a6 6 0 0 1 6-6zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`, // Olive oil
      `<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V9l5 4V9l5 4V5h4v16"/></svg>` // Complexes
    ];

    const row = document.getElementById('metricsRow');
    if (!row) return;

    row.innerHTML = metrics.map((m, i) => {
      const raw = (m.num || '').trim();
      const match = raw.match(/^([+]\s*[\d\s]+|[\d\s]+[+]?)(.*)$/);
      let numHtml = '';
      if (match) {
        const numPart = match[1].trim();
        const unitPart = match[2].trim();
        numHtml = `<span class="metric-val-digits" dir="ltr">${numPart}</span>${unitPart ? ' <span class="metric-val-unit">' + unitPart + '</span>' : ''}`;
      } else {
        numHtml = `<span class="metric-val-digits" dir="ltr">${raw}</span>`;
      }

      return `
        <div class="metric-card">
          <div class="metric-icon-circle" aria-hidden="true">
            ${icons[i] || icons[0]}
          </div>
          <div class="metric-number">${numHtml}</div>
          <div class="metric-label">${m.label}</div>
        </div>
      `;
    }).join('');
  }

  function setupResultsObserver() {
    renderResultsMetrics();
    const section = document.querySelector('.results-section');
    if (!section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
  }

  function animateNumbers() {
    // Subtle pulse animation
    document.querySelectorAll('.metric-number').forEach(el => {
      el.style.transform = 'scale(1.08)';
      el.style.transition = 'transform 0.4s ease';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 400);
    });
  }

  /* ------------------------------------------------------------------------
     8. Gallery Carousel & Category Filtering
     ------------------------------------------------------------------------ */
  function setupGallery() {
    renderGallery();
    setupGalleryControls();
  }

  function renderGallery() {
    const track = document.getElementById('galleryTrack');
    const dotsContainer = document.getElementById('galleryDots');
    if (!track) return;

    const filtered = activeGalleryCat === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.cat === activeGalleryCat);

    track.innerHTML = filtered.map(item => `
      <div class="gallery-item" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
      </div>
    `).join('');

    if (dotsContainer) {
      dotsContainer.innerHTML = filtered.slice(0, 3).map((_, i) => `
        <span class="dot-indicator ${i === carouselIdx ? 'active' : ''}"></span>
      `).join('');
    }

    track.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.getAttribute('data-id'), 10);
        const found = galleryItems.find(g => g.id === id);
        if (found) {
          openGalleryLightbox(found);
        }
      });
    });
  }

  function setupGalleryControls() {
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        carouselIdx = (carouselIdx - 1 + 3) % 3;
        scrollGalleryTrack(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        carouselIdx = (carouselIdx + 1) % 3;
        scrollGalleryTrack(1);
      });
    }

    // Category buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeGalleryCat = btn.getAttribute('data-cat') || 'all';
        carouselIdx = 0;
        renderGallery();
      });
    });
  }

  function scrollGalleryTrack(dir) {
    const track = document.getElementById('galleryTrack');
    if (!track) return;
    track.scrollBy({ left: dir * 200, behavior: 'smooth' });

    // Update dots
    document.querySelectorAll('.dot-indicator').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === carouselIdx);
    });
  }

  function openGalleryLightbox(item) {
    const cardData = {
      num: 'GALERIE',
      title: item.title,
      detail: item.desc,
      keyPoints: [
        'Photographie de terrain documentée',
        'Valorisation du patrimoine agricole et industriel de Tunisie'
      ]
    };
    openExpertiseModal(cardData, item.fullSrc || item.src);
  }

  /* ------------------------------------------------------------------------
     9. Contact Form & Feedback
     - Actuellement en mode statique (simulation élégante sans rechargement de page).
     - Dès que le client donne son adresse, insérez son Form ID Formspree ci-dessous
       pour activer l'envoi réel en 1 seconde : const FORMSPREE_ID = 'xknpqxyz';
     ------------------------------------------------------------------------ */
  const FORMSPREE_ID = ''; // Laisser vide pour le mode statique, ou mettre l'ID Formspree (ex: 'xknpqxyz')

  function setupContactForm() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('contactFeedback');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = translations[currentLang].contact;
      if (!feedback) return;

      if (FORMSPREE_ID) {
        try {
          if (submitBtn) submitBtn.disabled = true;
          const formData = new FormData(form);
          const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          if (response.ok) {
            feedback.textContent = t.formSuccess;
            feedback.style.display = 'block';
            feedback.style.color = 'var(--color-gold)';
            feedback.style.marginTop = '15px';
            form.reset();
          } else {
            feedback.textContent = 'Erreur lors de l\'envoi. Veuillez réessayer ou utiliser l\'email direct.';
            feedback.style.display = 'block';
            feedback.style.color = '#ff6b6b';
            feedback.style.marginTop = '15px';
          }
        } catch (err) {
          feedback.textContent = 'Erreur réseau. Veuillez réessayer ultérieurement.';
          feedback.style.display = 'block';
          feedback.style.color = '#ff6b6b';
          feedback.style.marginTop = '15px';
        } finally {
          if (submitBtn) submitBtn.disabled = false;
          setTimeout(() => {
            feedback.style.display = 'none';
          }, 6000);
        }
      } else {
        // Mode statique actuel (simulation propre avec message de confirmation)
        feedback.textContent = t.formSuccess;
        feedback.style.display = 'block';
        feedback.style.color = 'var(--color-gold)';
        feedback.style.marginTop = '15px';
        form.reset();
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 6000);
      }
    });
  }

  /* ------------------------------------------------------------------------
     10. Smooth Scrolling
     ------------------------------------------------------------------------ */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

})();
