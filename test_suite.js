/**
 * TESTSPRITE VALIDATION SUITE - HAMDOUNI MOULDI PORTFOLIO
 * Validates file integrity, i18n coverage, DOM references, images, accessibility, and behaviors.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${testName} ${details ? '--> ' + details : ''}`);
    failedTests++;
  }
}

console.log('\n======================================================');
console.log('🧪 RUNNING TESTSPRITE QUALITY & INTEGRITY VALIDATION');
console.log('======================================================\n');

// 1. Files & Structure Verification
console.log('--- 1. File & Assets Structure ---');
const requiredFiles = [
  'index.html',
  'styles/main.css',
  'styles/components.css',
  'scripts/i18n.js',
  'scripts/main.js'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(rootDir, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
});

// 2. Images Verification
console.log('\n--- 2. Photographic Assets Verification ---');
const requiredImages = [
  'assets/images/hero.jpg',
  'assets/images/exact_hero_full.jpg',
  'assets/images/exact_card_01_machinisme.jpg',
  'assets/images/exact_card_02_hydraulique.jpg',
  'assets/images/exact_card_03_avicole.jpg',
  'assets/images/exact_card_04_bovin.jpg',
  'assets/images/exact_card_05_agroalimentaire.jpg',
  'assets/images/exact_card_06_gestion.jpg',
  'assets/images/exact_gallery_01.jpg',
  'assets/images/exact_gallery_02.jpg',
  'assets/images/exact_gallery_03.jpg',
  'assets/images/exact_gallery_04.jpg',
  'assets/images/exact_olive_branch.jpg',
  'assets/images/card-machinisme.jpg',
  'assets/images/card-hydraulique.jpg',
  'assets/images/card-avicole.jpg',
  'assets/images/card-bovin.jpg',
  'assets/images/card-agroalimentaire.jpg'
];

requiredImages.forEach(img => {
  const fullPath = path.join(rootDir, img);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  assert(exists && size > 1000, `Image asset valid (>1KB): ${img}`, `size: ${size} bytes`);
});

const newGeneratedImages = [
  'public/images/hero/hero-landscape-bg.webp',
  'public/images/hero/mouldi-hamdouni-portrait.webp',
  'public/images/expertise/expertise-machinisme.webp',
  'public/images/expertise/expertise-hydraulique.webp',
  'public/images/expertise/expertise-elevage-avicole.webp',
  'public/images/expertise/expertise-elevage-bovin.webp',
  'public/images/expertise/expertise-agroalimentaire.webp',
  'public/images/expertise/expertise-gestion-projets.webp',
  'public/images/career/career-ghazala-bizerte.webp',
  'public/images/career/career-tawila-sidibouzid.webp',
  'public/images/career/career-thibar-beja.webp',
  'public/images/gallery/gallery-olives-harvest.webp',
  'public/images/gallery/gallery-dairy-pasture.webp',
  'public/images/gallery/gallery-agro-complex.webp',
  'public/images/decorative/olive-branch-watermark.png',
  'public/images/contact/contact-landscape-bg.webp'
];

newGeneratedImages.forEach(img => {
  const fullPath = path.join(rootDir, img);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  assert(exists && size > 5000, `New 15-Asset generated image valid (>5KB): ${img}`, `size: ${size} bytes`);
});

// 3. i18n Dictionary Integrity
console.log('\n--- 3. Multilingual Coverage & Data Integrity ---');
const { translations } = require('./scripts/i18n.js');

assert(!!translations.fr, 'French translations present');
assert(!!translations.ar, 'Arabic translations present');
assert(!!translations.en, 'English translations present');

['fr', 'ar', 'en'].forEach(lang => {
  const t = translations[lang];
  assert(t.nav && t.nav.home && t.nav.career && t.nav.expertise && t.nav.results, `Nav keys complete for [${lang}]`);
  assert(t.hero && t.hero.title && t.hero.scriptNote, `Hero keys complete for [${lang}]`);
  assert(t.expertise && t.expertise.cards && t.expertise.cards.length === 6, `6 Expertise cards defined for [${lang}]`);
  assert(t.career && t.career.milestones && t.career.milestones.length >= 6, `Career milestones defined (>=6) for [${lang}]`);
  assert(t.results && t.results.metrics && t.results.metrics.length === 5, `5 Concrete metric results defined for [${lang}]`);
  assert(t.engagement && t.engagement.quote && t.engagement.cats.length >= 4, `Engagement & gallery cats defined for [${lang}]`);
  assert(t.contact && t.contact.phone && t.contact.email && t.contact.formName && t.contact.namePlaceholder && t.contact.emailPlaceholder && t.contact.subjectPlaceholder && t.contact.messagePlaceholder && t.contact.formSubmit, `Contact details & form placeholders defined for [${lang}]`);
});

// 4. HTML DOM IDs referenced in JS
console.log('\n--- 4. DOM Elements & ID Mapping Verification ---');
const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

const expectedIds = [
  'brandSubtitle',
  'navHome', 'navCareer', 'navExpertise', 'navResults', 'navGallery', 'navContact',
  'heroTag', 'heroTitle', 'heroSubtitle', 'heroCta', 'heroScriptNote',
  'expertiseTag', 'expertiseTitle', 'expertiseDesc', 'expertiseGrid',
  'careerTag', 'careerTitle', 'careerDesc', 'mapCardTitle', 'mapCardHint', 'timelineList',
  'mapInfoTitle', 'mapInfoPeriod', 'mapInfoDesc',
  'resultsTag', 'resultsTitle', 'resultsDesc', 'metricsRow',
  'engagementTag', 'engagementTitle', 'engagementQuote', 'engagementAuthor',
  'galleryTag', 'galleryTrack', 'galleryDots', 'galleryPrevBtn', 'galleryNextBtn',
  'contactTag', 'contactTitle', 'contactDesc', 'contactForm', 'contactFeedback',
  'formNameLabel', 'userName', 'formEmailLabel', 'userEmail', 'formSubjLabel', 'userSubject', 'formMsgLabel', 'userMessage', 'formSubmitBtn',
  'appModal', 'modalCloseBtn', 'modalImg', 'modalNum', 'modalTitle', 'modalDesc', 'modalPoints',
  'footerRights', 'footerBackTop'
];

expectedIds.forEach(id => {
  const hasId = htmlContent.includes(`id="${id}"`);
  assert(hasId, `DOM Element present: #${id}`);
});

// 5. Accessibility & Semantic HTML Check
console.log('\n--- 5. Accessibility & Semantic Standards ---');
assert(htmlContent.includes('<main>'), 'Semantic <main> element present');
assert(htmlContent.includes('<header class="site-header" role="banner">'), 'Semantic <header> with role="banner"');
assert(htmlContent.includes('<footer class="site-footer" role="contentinfo">'), 'Semantic <footer> with role="contentinfo"');
assert(htmlContent.includes('role="navigation"'), 'Semantic navigation role present');
assert(htmlContent.includes('aria-modal="true"'), 'Modal has aria-modal="true"');
assert(htmlContent.includes('aria-label="Menu"'), 'Mobile menu toggle has aria-label');
assert(htmlContent.includes('aria-expanded="false"'), 'Mobile toggle has aria-expanded');
assert(htmlContent.includes('viewport'), 'Meta viewport configured');
assert(htmlContent.includes('description'), 'Meta description configured');

// 6. CSS Tokens & Media Queries
console.log('\n--- 6. CSS Design System Verification ---');
const mainCss = fs.readFileSync(path.join(rootDir, 'styles/main.css'), 'utf8');
const compCss = fs.readFileSync(path.join(rootDir, 'styles/components.css'), 'utf8');

assert(mainCss.includes('--color-bg-main'), 'CSS token --color-bg-main defined');
assert(mainCss.includes('--color-gold'), 'CSS token --color-gold defined');
assert(mainCss.includes('--color-cream-bg'), 'CSS token --color-cream-bg defined');
assert(mainCss.includes('html[dir="rtl"]'), 'RTL stylesheet rules defined for Arabic');
assert(compCss.includes('@media (max-width: 768px)'), 'Mobile responsive breakpoint (768px) defined');
assert(compCss.includes('@media (max-width: 1100px)'), 'Tablet responsive breakpoint (1100px) defined');

console.log('\n======================================================');
console.log(`📊 TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('======================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL VALIDATION CHECKS PASSED PERFECTLY!\n');
}
