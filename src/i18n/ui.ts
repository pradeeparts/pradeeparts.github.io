export const languages = { en: "English", hi: "हिन्दी" } as const;
export const defaultLang = "en";
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "हिन्दी",
    "hero.cta.work": "See the work",
    "hero.cta.contact": "Get a quote",
    "hero.scroll": "Scroll",
    "stats.years": "Years of craft",
    "stats.works": "Works delivered",
    "stats.cities": "Cities served",
    "categories.title": "What I paint",
    "categories.subtitle": "From devotional murals to storefront signs — hand-painted, on-site, on time.",
    "category.devotional": "Religious & Devotional",
    "category.devotional.desc": "Durga, Lakshmi, Ganesh, sacred scenes & temple art.",
    "category.festivals": "Festivals & Celebrations",
    "category.festivals.desc": "Diwali, Navratri storefronts & event decor.",
    "category.signs": "Storefronts & Signs",
    "category.signs.desc": "Building name boards, shutters & wall signage.",
    "category.commercial": "Commercial & Custom Murals",
    "category.commercial.desc": "Sports, café, brand & institutional walls.",
    "work.title": "The Work",
    "work.subtitle": "33 selected pieces from 25+ years of hand-painted craft.",
    "work.filter.all": "All",
    "work.empty": "No works in this category yet.",
    "work.count": "works",
    "about.title": "About Pradeep",
    "about.lead": "For 25 years, Pradeep Gupta has turned blank walls into stories — across temples, storefronts, schools, and public buildings.",
    "about.body1": "He started as a teenager, learning the craft on-site from sign painters and mural artists. Today, in his late thirties, he runs Pradeep Arts Studio — taking on murals, religious art, festival decor, building signage, and custom commissions across the city.",
    "about.body2": "Every piece is hand-painted. No vinyl, no print-outs. Just brush, pigment, and a quarter-century of practice.",
    "about.skills.title": "What he does",
    "about.skill.murals": "Wall murals — religious, festival & decorative",
    "about.skill.signs": "Hand-painted signs — building names, shutters, banners",
    "about.skill.statues": "Idol & statue painting — Durga, Lakshmi, Ganesh & more",
    "about.skill.commercial": "Custom commercial work — café walls, sports murals, branding",
    "about.cta": "Have a wall in mind? Let's talk.",
    "contact.title": "Let's create something",
    "contact.subtitle": "Reach out on WhatsApp for the fastest reply. Share your space, your idea, and a budget — I'll quote within a day.",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.note": "Available across the city for site visits.",
    "contact.serves.title": "Work I take on",
    "contact.serves": [
      "Temple & home devotional murals",
      "Storefront branding & signage",
      "Festival décor (Diwali, Navratri, more)",
      "Statue & idol painting",
      "Café, school & office wall art",
      "Custom commissions",
    ],
    "footer.rights": "All rights reserved.",
    "footer.built": "Hand-painted craft, modern web.",
  },
  hi: {
    "nav.home": "मुख्य पृष्ठ",
    "nav.work": "कार्य",
    "nav.about": "परिचय",
    "nav.contact": "संपर्क",
    "nav.lang": "English",
    "hero.cta.work": "कार्य देखें",
    "hero.cta.contact": "संपर्क करें",
    "hero.scroll": "नीचे स्क्रॉल करें",
    "stats.years": "वर्षों का अनुभव",
    "stats.works": "पूर्ण कार्य",
    "stats.cities": "शहर",
    "categories.title": "मैं क्या बनाता हूँ",
    "categories.subtitle": "धार्मिक चित्रों से लेकर दुकानों के साइनबोर्ड तक — हाथ से बना, समय पर, स्थान पर।",
    "category.devotional": "धार्मिक चित्र",
    "category.devotional.desc": "दुर्गा, लक्ष्मी, गणेश, धार्मिक दृश्य एवं मंदिर कला।",
    "category.festivals": "त्यौहार",
    "category.festivals.desc": "दिवाली, नवरात्रि की सजावट एवं उत्सव चित्रकला।",
    "category.signs": "साइनबोर्ड",
    "category.signs.desc": "भवन नामपट्ट, शटर एवं दीवार साइनबोर्ड।",
    "category.commercial": "वाणिज्यिक चित्र",
    "category.commercial.desc": "खेल, कैफे, ब्रांड एवं संस्थागत दीवारें।",
    "work.title": "कार्य",
    "work.subtitle": "25+ वर्षों के अनुभव से 33 चुनिंदा कार्य।",
    "work.filter.all": "सभी",
    "work.empty": "इस श्रेणी में अभी कोई कार्य नहीं।",
    "work.count": "कार्य",
    "about.title": "प्रदीप के बारे में",
    "about.lead": "पिछले 25 वर्षों से प्रदीप गुप्ता खाली दीवारों को कहानियों में बदल रहे हैं — मंदिरों, दुकानों, स्कूलों एवं सार्वजनिक भवनों पर।",
    "about.body1": "उन्होंने किशोरावस्था में ही साइन पेंटर एवं म्यूरल कलाकारों से यह कला सीखी। आज, अपने तीस के दशक के अंत में, वे प्रदीप आर्ट्स स्टूडियो चलाते हैं — दीवार चित्र, धार्मिक कला, त्यौहार सजावट, साइनबोर्ड एवं कस्टम कार्य पूरे शहर में करते हैं।",
    "about.body2": "हर एक टुकड़ा हाथ से बनाया जाता है। कोई विनाइल नहीं, कोई प्रिंट नहीं। सिर्फ़ ब्रश, रंग, और 25 वर्षों का अभ्यास।",
    "about.skills.title": "वे क्या करते हैं",
    "about.skill.murals": "दीवार चित्रकला — धार्मिक, त्यौहार एवं सजावटी",
    "about.skill.signs": "हाथ से बने साइनबोर्ड — भवन नाम, शटर, बैनर",
    "about.skill.statues": "मूर्ति चित्रकला — दुर्गा, लक्ष्मी, गणेश आदि",
    "about.skill.commercial": "कस्टम वाणिज्यिक कार्य — कैफे दीवारें, खेल चित्र, ब्रांडिंग",
    "about.cta": "कोई दीवार मन में है? बात करें।",
    "contact.title": "कुछ अनोखा बनाएँ",
    "contact.subtitle": "तुरंत उत्तर के लिए WhatsApp पर संपर्क करें। अपनी जगह, विचार और बजट साझा करें — मैं एक दिन में आपको कोट दूँगा।",
    "contact.whatsapp": "WhatsApp पर संदेश भेजें",
    "contact.note": "साइट विज़िट के लिए शहर भर में उपलब्ध।",
    "contact.serves.title": "मैं क्या काम करता हूँ",
    "contact.serves": [
      "मंदिर एवं घर के धार्मिक चित्र",
      "दुकान ब्रांडिंग एवं साइनबोर्ड",
      "त्यौहार सजावट (दिवाली, नवरात्रि आदि)",
      "मूर्ति चित्रकला",
      "कैफे, स्कूल एवं ऑफिस दीवार कला",
      "कस्टम कार्य",
    ],
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.built": "हाथ से बनी कला, आधुनिक वेब।",
  },
} as const;

export const t = <L extends Lang>(lang: L) => (key: keyof (typeof ui)["en"]) =>
  (ui[lang] as Record<string, unknown>)[key as string] ?? (ui.en as Record<string, unknown>)[key as string];

export const getLangFromUrl = (url: URL): Lang => {
  const seg = url.pathname.split("/").filter(Boolean);
  const idx = seg[0] === "portfolio" ? 1 : 0;
  if (seg[idx] === "hi") return "hi";
  return "en";
};

export const localizedPath = (path: string, lang: Lang) => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? clean : `/hi${clean === "/" ? "" : clean}`;
};
