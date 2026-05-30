/* ============================================
   TIRATH ELECTRONICS — i18n (4 languages)
   Punjabi (pa) · Hindi (hi) · English (en) · Hinglish (hg)
   ============================================ */

(() => {
  'use strict';

  const TRANSLATIONS = {

    /* ===== HINGLISH (default — site copy as-written) ===== */
    hg: {
      nav: {
        home: 'Home', products: 'Products', repairs: 'Repairs',
        about: 'About', call: 'Call shop'
      },
      promo: {
        tag: 'Special offer', head: "You'll get a discount",
        sub: 'on your purchase —', cta: 'Claim on WhatsApp →'
      },
      hero: {
        eyebrow: '— Bhangala, Mukerian · Since 40+ years',
        title1: 'Honest service.',
        title2: 'Trusted',
        title2i: 'repairs.',
        tagline: 'Bharosa, asli quality, sahi daam — har baar. The shop your neighbourhood actually recommends, for TVs, ACs, microwaves aur sab kuch jo ghar mein chahiye.',
        btnRepair: 'Get a repair quote',
        btnBrowse: 'Browse products',
        metaFreeT: 'Free diagnostic', metaFreeS: 'Check karne ka koi charge nahi',
        meta40T: '40+ saal ka tajurba', meta40S: 'Tirath Singh, since day one',
        metaWAT: 'WhatsApp updates', metaWAS: 'Ho jaye toh batayenge'
      },
      form: {
        eyebrow: '— Apni problem batao',
        title: 'Form bharo, hum reply karenge',
        sub: 'Sab details ek baar mein WhatsApp pe bhej do — naam, number, aur kya kaam hai. Hum 20 minute mein wapas connect karte hain.',
        name: 'Aapka naam', phone: 'Phone', email: 'Email',
        emailOpt: '(optional)',
        problem: 'Kya problem hai?',
        submit: 'Send on WhatsApp',
        note: 'Aapki details seedha WhatsApp pe jayegi — koi spam nahi.'
      },
      services: {
        num: '01 — Hum kya karte hain',
        title1: 'Khol ke dekhte hain,', title2: 'samajh ke fix karte hain,',
        title3: 'aur theek bhi.',
        sub: 'Teen kaam — proper tareeke se. Chautha kuch chhupa ke nahi.',
        repair: 'Repairs', sales: 'New & refurbished sales', advice: 'Honest advice',
        seeRepair: 'See repairs →', browse: 'Browse products →', aboutUs: 'About us →'
      },
      values: {
        num: '03 — Log wapas kyon aate hain',
        title1: 'Char baatein jo hum', title2: 'har visit pe', title3: 'promise karte hain.',
        warm: 'Warm', honest: 'Honest', skilled: 'Skilled', dependable: 'Dependable'
      },
      reviews: {
        num: '04 — What customers say',
        title1: 'Bharosa, ek customer', title2: 'doosre tak.',
        sub: 'Aap hi se sunlo — Mukerian ke neighbours, families, students.',
        ctaText: 'Hum se kuch khareeda ya repair karaya? Apni review WhatsApp pe bhej do.',
        ctaBtn: 'Leave a review on WhatsApp'
      },
      visit: {
        num: '06 — Aa jao milne',
        title1: 'Dhoondhne mein aasaan,', title2: 'mushkil.',
        title2pre: 'bhoolne mein',
        lead: 'Walk-ins anytime. Product le aao, problem le aao, chai pi lo agar mann ho — hum saath baith ke solve karenge.',
        address: 'Address', hours: 'Hours', phone: 'Phone', email: 'Email',
        directions: 'Get Directions', whatsapp: 'WhatsApp us'
      },
      footer: {
        sitemap: 'Sitemap', contact: 'Contact',
        tagline: 'Honest service. Trusted repairs. The shop your neighbourhood actually recommends.',
        hours: 'Open every day · 10:00 — 20:30',
        waBtn: 'WhatsApp us',
        copyright: '© 2026 Tirath Electronics · Built with care in Mukerian.'
      }
    },

    /* ===== ENGLISH ===== */
    en: {
      nav: { home: 'Home', products: 'Products', repairs: 'Repairs', about: 'About', call: 'Call shop' },
      promo: { tag: 'Special offer', head: "You'll get a discount", sub: 'on your purchase —', cta: 'Claim on WhatsApp →' },
      hero: {
        eyebrow: '— Bhangala, Mukerian · 40+ years strong',
        title1: 'Honest service.',
        title2: 'Trusted',
        title2i: 'repairs.',
        tagline: "Trust, quality, fair prices — every time. The shop your neighbourhood actually recommends — for TVs, ACs, microwaves, and everything else your home needs.",
        btnRepair: 'Get a repair quote',
        btnBrowse: 'Browse products',
        metaFreeT: 'Free diagnostic', metaFreeS: 'No charge to inspect',
        meta40T: '40+ years experience', meta40S: 'Tirath Singh, since day one',
        metaWAT: 'WhatsApp updates', metaWAS: "We'll message when it's done"
      },
      form: {
        eyebrow: '— Tell us the problem',
        title: 'Fill the form, we reply fast',
        sub: 'Send your details once on WhatsApp — name, number, and what needs fixing. We usually reply in 20 minutes.',
        name: 'Your name', phone: 'Phone', email: 'Email',
        emailOpt: '(optional)',
        problem: 'What is the problem?',
        submit: 'Send on WhatsApp',
        note: 'Your details go straight to WhatsApp — no spam.'
      },
      services: {
        num: '01 — What we do',
        title1: 'We open them up,', title2: 'figure them out,',
        title3: 'and fix them properly.',
        sub: 'Three things, done right. No fourth thing hidden inside.',
        repair: 'Repairs', sales: 'New & refurbished sales', advice: 'Honest advice',
        seeRepair: 'See repairs →', browse: 'Browse products →', aboutUs: 'About us →'
      },
      values: {
        num: '03 — Why customers come back',
        title1: 'Four things we promise', title2: 'on every visit.', title3: '',
        warm: 'Warm', honest: 'Honest', skilled: 'Skilled', dependable: 'Dependable'
      },
      reviews: {
        num: '04 — What customers say',
        title1: 'Trust, passed from one customer', title2: 'to the next.',
        sub: 'Hear it from them — neighbours, families, students from Mukerian.',
        ctaText: 'Bought or repaired something with us? Send your review on WhatsApp.',
        ctaBtn: 'Leave a review on WhatsApp'
      },
      visit: {
        num: '06 — Come say hi',
        title1: 'Easy to find,', title2: 'forget.',
        title2pre: 'hard to',
        lead: 'Walk in any time. Bring the product, bring the problem, bring tea if you like — we sit together and figure it out.',
        address: 'Address', hours: 'Hours', phone: 'Phone', email: 'Email',
        directions: 'Get Directions', whatsapp: 'WhatsApp us'
      },
      footer: {
        sitemap: 'Sitemap', contact: 'Contact',
        tagline: 'Honest service. Trusted repairs. The shop your neighbourhood actually recommends.',
        hours: 'Open every day · 10:00 — 20:30',
        waBtn: 'WhatsApp us',
        copyright: '© 2026 Tirath Electronics · Built with care in Mukerian.'
      }
    },

    /* ===== HINDI ===== */
    hi: {
      nav: { home: 'होम', products: 'उत्पाद', repairs: 'मरम्मत', about: 'हमारे बारे में', call: 'कॉल करें' },
      promo: { tag: 'विशेष ऑफर', head: 'आपको छूट मिलेगी', sub: 'अपनी खरीदारी पर —', cta: 'व्हाट्सएप पर पाएं →' },
      hero: {
        eyebrow: '— भंगाला, मुकेरियाँ · 40+ साल से',
        title1: 'ईमानदार सेवा।',
        title2: 'भरोसेमंद',
        title2i: 'मरम्मत।',
        tagline: 'भरोसा, असली क्वालिटी, सही दाम — हर बार। आपके मोहल्ले की सबसे भरोसेमंद दुकान — TV, AC, माइक्रोवेव और घर के हर सामान के लिए।',
        btnRepair: 'मरम्मत का कोट लें',
        btnBrowse: 'प्रोडक्ट देखें',
        metaFreeT: 'फ्री डायग्नोस्टिक', metaFreeS: 'चेक करने का कोई चार्ज नहीं',
        meta40T: '40+ साल का तजुर्बा', meta40S: 'तीरथ सिंह, पहले दिन से',
        metaWAT: 'व्हाट्सएप अपडेट', metaWAS: 'तैयार हो जाने पर बता देंगे'
      },
      form: {
        eyebrow: '— अपनी समस्या बताएं',
        title: 'फॉर्म भरें, हम जल्दी जवाब देंगे',
        sub: 'अपनी सारी डिटेल एक बार में व्हाट्सएप पर भेज दें — नाम, नंबर, और क्या काम है। हम 20 मिनट में जवाब देते हैं।',
        name: 'आपका नाम', phone: 'फ़ोन', email: 'ईमेल',
        emailOpt: '(वैकल्पिक)',
        problem: 'क्या समस्या है?',
        submit: 'व्हाट्सएप पर भेजें',
        note: 'आपकी डिटेल सीधे व्हाट्सएप पर जाएगी — कोई स्पैम नहीं।'
      },
      services: {
        num: '01 — हम क्या करते हैं',
        title1: 'खोल कर देखते हैं,', title2: 'समझ कर ठीक करते हैं,',
        title3: 'और सही करते हैं।',
        sub: 'तीन काम — सही तरीके से। चौथा कुछ छुपा कर नहीं।',
        repair: 'मरम्मत', sales: 'नए और रीफर्बिश्ड सेल्स', advice: 'ईमानदार सलाह',
        seeRepair: 'मरम्मत देखें →', browse: 'प्रोडक्ट देखें →', aboutUs: 'हमारे बारे में →'
      },
      values: {
        num: '03 — लोग वापस क्यों आते हैं',
        title1: 'चार बातें जो हम', title2: 'हर विज़िट पे', title3: 'वादा करते हैं।',
        warm: 'गर्मजोशी', honest: 'ईमानदारी', skilled: 'हुनरमंद', dependable: 'भरोसेमंद'
      },
      reviews: {
        num: '04 — ग्राहक क्या कहते हैं',
        title1: 'भरोसा, एक ग्राहक से', title2: 'दूसरे तक।',
        sub: 'उन्हीं से सुनें — मुकेरियाँ के पड़ोसी, परिवार, स्टूडेंट्स।',
        ctaText: 'हम से कुछ खरीदा या रिपेयर कराया? अपनी रिव्यू व्हाट्सएप पर भेजें।',
        ctaBtn: 'व्हाट्सएप पर रिव्यू दें'
      },
      visit: {
        num: '06 — मिलने आ जाओ',
        title1: 'ढूँढने में आसान,', title2: 'मुश्किल।',
        title2pre: 'भूलने में',
        lead: 'कभी भी आ जाओ। प्रोडक्ट लाओ, समस्या लाओ, चाय पी लो अगर मन हो — हम साथ बैठ कर हल निकालेंगे।',
        address: 'पता', hours: 'समय', phone: 'फ़ोन', email: 'ईमेल',
        directions: 'रास्ता पाएं', whatsapp: 'व्हाट्सएप करें'
      },
      footer: {
        sitemap: 'साइटमैप', contact: 'संपर्क',
        tagline: 'ईमानदार सेवा। भरोसेमंद मरम्मत। आपके मोहल्ले की सबसे भरोसेमंद दुकान।',
        hours: 'हर दिन खुला · 10:00 — 20:30',
        waBtn: 'व्हाट्सएप करें',
        copyright: '© 2026 तीरथ इलेक्ट्रॉनिक्स · मुकेरियाँ में दिल से बनाया।'
      }
    },

    /* ===== PUNJABI (Gurmukhi) ===== */
    pa: {
      nav: { home: 'ਹੋਮ', products: 'ਉਤਪਾਦ', repairs: 'ਮੁਰੰਮਤ', about: 'ਸਾਡੇ ਬਾਰੇ', call: 'ਕਾਲ ਕਰੋ' },
      promo: { tag: 'ਖਾਸ ਆਫਰ', head: 'ਤੁਹਾਨੂੰ ਛੋਟ ਮਿਲੇਗੀ', sub: 'ਆਪਣੀ ਖਰੀਦਦਾਰੀ ’ਤੇ —', cta: 'ਵਟਸਐਪ ’ਤੇ ਪਾਓ →' },
      hero: {
        eyebrow: '— ਭੰਗਾਲਾ, ਮੁਕੇਰੀਆਂ · 40+ ਸਾਲਾਂ ਤੋਂ',
        title1: 'ਇਮਾਨਦਾਰ ਸੇਵਾ।',
        title2: 'ਭਰੋਸੇਮੰਦ',
        title2i: 'ਮੁਰੰਮਤ।',
        tagline: 'ਭਰੋਸਾ, ਅਸਲ ਕੁਆਲਿਟੀ, ਸਹੀ ਕੀਮਤ — ਹਰ ਵਾਰ। ਤੁਹਾਡੇ ਮੁਹੱਲੇ ਦੀ ਸਭ ਤੋਂ ਭਰੋਸੇਮੰਦ ਦੁਕਾਨ — TV, AC, ਮਾਈਕ੍ਰੋਵੇਵ ਅਤੇ ਘਰ ਦੀ ਹਰ ਚੀਜ਼ ਲਈ।',
        btnRepair: 'ਮੁਰੰਮਤ ਦਾ ਕੋਟ ਲਵੋ',
        btnBrowse: 'ਪ੍ਰੋਡਕਟ ਵੇਖੋ',
        metaFreeT: 'ਫ੍ਰੀ ਡਾਇਗਨੋਸਟਿਕ', metaFreeS: 'ਚੈੱਕ ਕਰਨ ਦਾ ਕੋਈ ਚਾਰਜ ਨਹੀਂ',
        meta40T: '40+ ਸਾਲ ਦਾ ਤਜ਼ਰਬਾ', meta40S: 'ਤੀਰਥ ਸਿੰਘ, ਪਹਿਲੇ ਦਿਨ ਤੋਂ',
        metaWAT: 'ਵਟਸਐਪ ਅੱਪਡੇਟ', metaWAS: 'ਤਿਆਰ ਹੋਣ ’ਤੇ ਦੱਸ ਦੇਵਾਂਗੇ'
      },
      form: {
        eyebrow: '— ਆਪਣੀ ਸਮੱਸਿਆ ਦੱਸੋ',
        title: 'ਫਾਰਮ ਭਰੋ, ਅਸੀਂ ਜਲਦੀ ਜਵਾਬ ਦੇਵਾਂਗੇ',
        sub: 'ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਡਿਟੇਲਾਂ ਇੱਕ ਵਾਰ ਵਟਸਐਪ ’ਤੇ ਭੇਜੋ — ਨਾਮ, ਨੰਬਰ, ਅਤੇ ਕੀ ਕੰਮ ਹੈ। ਅਸੀਂ 20 ਮਿੰਟ ਵਿੱਚ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ।',
        name: 'ਤੁਹਾਡਾ ਨਾਮ', phone: 'ਫ਼ੋਨ', email: 'ਈਮੇਲ',
        emailOpt: '(ਚੋਣ-ਅਨੁਸਾਰ)',
        problem: 'ਕੀ ਸਮੱਸਿਆ ਹੈ?',
        submit: 'ਵਟਸਐਪ ’ਤੇ ਭੇਜੋ',
        note: 'ਤੁਹਾਡੀਆਂ ਡਿਟੇਲਾਂ ਸਿੱਧੇ ਵਟਸਐਪ ’ਤੇ ਜਾਣਗੀਆਂ — ਕੋਈ ਸਪੈਮ ਨਹੀਂ।'
      },
      services: {
        num: '01 — ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ',
        title1: 'ਖੋਲ ਕੇ ਵੇਖਦੇ ਹਾਂ,', title2: 'ਸਮਝ ਕੇ ਠੀਕ ਕਰਦੇ ਹਾਂ,',
        title3: 'ਅਤੇ ਸਹੀ ਕਰਦੇ ਹਾਂ।',
        sub: 'ਤਿੰਨ ਕੰਮ — ਸਹੀ ਤਰੀਕੇ ਨਾਲ। ਚੌਥਾ ਕੁਝ ਛੁਪਾ ਕੇ ਨਹੀਂ।',
        repair: 'ਮੁਰੰਮਤ', sales: 'ਨਵੇਂ ਅਤੇ ਰੀਫਰਬਿਸ਼ਡ ਸੇਲਾਂ', advice: 'ਇਮਾਨਦਾਰ ਸਲਾਹ',
        seeRepair: 'ਮੁਰੰਮਤ ਵੇਖੋ →', browse: 'ਪ੍ਰੋਡਕਟ ਵੇਖੋ →', aboutUs: 'ਸਾਡੇ ਬਾਰੇ →'
      },
      values: {
        num: '03 — ਲੋਕ ਵਾਪਸ ਕਿਉਂ ਆਉਂਦੇ ਹਨ',
        title1: 'ਚਾਰ ਗੱਲਾਂ ਜੋ ਅਸੀਂ', title2: 'ਹਰ ਮੁਲਾਕਾਤ ’ਤੇ', title3: 'ਵਾਅਦਾ ਕਰਦੇ ਹਾਂ।',
        warm: 'ਨਿੱਘ', honest: 'ਇਮਾਨਦਾਰੀ', skilled: 'ਹੁਨਰਮੰਦ', dependable: 'ਭਰੋਸੇਮੰਦ'
      },
      reviews: {
        num: '04 — ਗ੍ਰਾਹਕ ਕੀ ਕਹਿੰਦੇ ਹਨ',
        title1: 'ਭਰੋਸਾ, ਇੱਕ ਗ੍ਰਾਹਕ ਤੋਂ', title2: 'ਦੂਜੇ ਤੱਕ।',
        sub: 'ਉਨ੍ਹਾਂ ਤੋਂ ਹੀ ਸੁਣੋ — ਮੁਕੇਰੀਆਂ ਦੇ ਗੁਆਂਢੀ, ਪਰਿਵਾਰ, ਵਿਦਿਆਰਥੀ।',
        ctaText: 'ਸਾਡੇ ਤੋਂ ਕੁਝ ਖਰੀਦਿਆ ਜਾਂ ਮੁਰੰਮਤ ਕਰਵਾਈ? ਆਪਣੀ ਰਾਏ ਵਟਸਐਪ ’ਤੇ ਭੇਜੋ।',
        ctaBtn: 'ਵਟਸਐਪ ’ਤੇ ਰਾਏ ਦਿਓ'
      },
      visit: {
        num: '06 — ਮਿਲਣ ਆ ਜਾਓ',
        title1: 'ਲੱਭਣ ਵਿੱਚ ਆਸਾਨ,', title2: 'ਮੁਸ਼ਕਿਲ।',
        title2pre: 'ਭੁੱਲਣ ਵਿੱਚ',
        lead: 'ਕਦੇ ਵੀ ਆ ਜਾਓ। ਪ੍ਰੋਡਕਟ ਲੈ ਆਓ, ਸਮੱਸਿਆ ਲੈ ਆਓ, ਚਾਹ ਪੀ ਲਵੋ ਜੇ ਮਨ ਹੋਵੇ — ਅਸੀਂ ਨਾਲ ਬੈਠ ਕੇ ਹੱਲ ਕੱਢਾਂਗੇ।',
        address: 'ਪਤਾ', hours: 'ਸਮਾਂ', phone: 'ਫ਼ੋਨ', email: 'ਈਮੇਲ',
        directions: 'ਰਸਤਾ ਪਾਓ', whatsapp: 'ਵਟਸਐਪ ਕਰੋ'
      },
      footer: {
        sitemap: 'ਸਾਈਟਮੈਪ', contact: 'ਸੰਪਰਕ',
        tagline: 'ਇਮਾਨਦਾਰ ਸੇਵਾ। ਭਰੋਸੇਮੰਦ ਮੁਰੰਮਤ। ਤੁਹਾਡੇ ਮੁਹੱਲੇ ਦੀ ਸਭ ਤੋਂ ਭਰੋਸੇਮੰਦ ਦੁਕਾਨ।',
        hours: 'ਹਰ ਰੋਜ਼ ਖੁੱਲ੍ਹਾ · 10:00 — 20:30',
        waBtn: 'ਵਟਸਐਪ ਕਰੋ',
        copyright: '© 2026 ਤੀਰਥ ਇਲੈਕਟ੍ਰਾਨਿਕਸ · ਮੁਕੇਰੀਆਂ ਵਿੱਚ ਦਿਲੋਂ ਬਣਾਇਆ।'
      }
    }
  };

  const DEFAULT_LANG = 'hg';
  const STORAGE_KEY = 'tirath-lang';

  const getLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && TRANSLATIONS[saved] ? saved : DEFAULT_LANG;
  };

  const get = (obj, path) =>
    path.split('.').reduce((o, k) => (o && k in o) ? o[k] : undefined, obj);

  const apply = (lang) => {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = get(dict, key);
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = get(dict, key);
      if (typeof value === 'string') el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = get(dict, key);
      if (typeof value === 'string') el.placeholder = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const value = get(dict, key);
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    document.documentElement.setAttribute('lang', lang === 'hg' ? 'en' : lang);
  };

  const setLang = (lang) => {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  };

  // Expose globally so other scripts can read current language if needed
  window.tirathI18n = { setLang, getLang, TRANSLATIONS };

  const init = () => {
    apply(getLang());
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLang(btn.dataset.lang);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
