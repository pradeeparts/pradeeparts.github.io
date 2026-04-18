export const SITE = {
  name: "Pradeep Arts Studio",
  artist: "Pradeep Gupta",
  artistHi: "प्रदीप गुप्ता",
  tagline: {
    en: "Every wall, a story.",
    hi: "हर दीवार, एक कहानी।",
  },
  subtitle: {
    en: "Hand-painted murals, signage & devotional art by Pradeep Gupta — 25+ years of craft.",
    hi: "प्रदीप गुप्ता द्वारा हाथ से बनाए गए दीवार चित्र, साइनबोर्ड एवं धार्मिक कला — 25+ वर्षों का अनुभव।",
  },
  url: "https://pradeepartist.github.io/portfolio",
  contact: {
    whatsapp: "919324558232",
    whatsappDisplay: "+91 93245 58232",
    whatsappMessage: {
      en: "Hello Pradeep, I saw your portfolio and would like to discuss a project.",
      hi: "नमस्ते प्रदीप जी, मैंने आपका पोर्टफोलियो देखा और एक काम के बारे में बात करना चाहता/चाहती हूँ।",
    },
  },
  yearsOfExperience: 25,
  social: {
    github: "https://github.com/pradeepartist/portfolio",
  },
} as const;

export const whatsappLink = (lang: "en" | "hi" = "en") =>
  `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(SITE.contact.whatsappMessage[lang])}`;
