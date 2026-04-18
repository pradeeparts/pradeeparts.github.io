import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/paintings/*.jpg",
  { eager: true },
);

export type Category = "devotional" | "festivals" | "signs" | "commercial";

export interface Painting {
  id: string;
  src: ImageMetadata;
  category: Category;
  title: { en: string; hi: string };
  description?: { en: string; hi: string };
  year?: number;
}

const meta: Record<string, Omit<Painting, "id" | "src">> = {
  "01": { category: "devotional", title: { en: "Goddess Durga & Navratri Dancers", hi: "दुर्गा माँ एवं नवरात्रि नृत्य" } },
  "02": { category: "festivals", title: { en: "Shubh Diwali Storefront", hi: "शुभ दीपावली स्टोरफ्रंट" } },
  "03": { category: "devotional", title: { en: "Heaven's Gate — In Progress", hi: "स्वर्ग द्वार — निर्माणाधीन" } },
  "04": { category: "festivals", title: { en: "Lakshmi & Shubh Labh Diwali Doors", hi: "लक्ष्मी एवं शुभ-लाभ दिवाली द्वार" } },
  "05": { category: "commercial", title: { en: "Café — Blue Floral Wall", hi: "कैफे — नीला फूल चित्र" } },
  "06": { category: "festivals", title: { en: "Happy Diwali Glasswork", hi: "हैप्पी दिवाली ग्लासवर्क" } },
  "07": { category: "commercial", title: { en: "Football Players Wall Mural", hi: "फुटबॉल खिलाड़ी दीवार चित्र" } },
  "08": { category: "commercial", title: { en: "Volleyball & Basketball Murals", hi: "वॉलीबॉल एवं बास्केटबॉल दीवार" } },
  "09": { category: "signs", title: { en: "Padmaja CHS Building Signage", hi: "पद्मजा CHS भवन साइनबोर्ड" } },
  "10": { category: "commercial", title: { en: "Asian Karate-Do Wall Mural", hi: "एशियन कराटे-डो दीवार चित्र" } },
  "11": { category: "signs", title: { en: "INS Hamla Gunnery Instructor Board", hi: "INS हमला गनरी इंस्ट्रक्टर बोर्ड" } },
  "12": { category: "commercial", title: { en: "Café Interior — Utensils Line Art", hi: "कैफे इंटीरियर — लाइन आर्ट" } },
  "13": { category: "commercial", title: { en: "Cricket Wall Mural", hi: "क्रिकेट दीवार चित्र" } },
  "14": { category: "signs", title: { en: "Gunjan-B Building Nameboard", hi: "गुंजन-बी भवन नामपट्ट" } },
  "15": { category: "devotional", title: { en: "Gates of Heaven with Doves", hi: "स्वर्ग द्वार एवं कबूतर" } },
  "16": { category: "commercial", title: { en: "Radhe Krishna Truck Art", hi: "राधे कृष्णा ट्रक कला" } },
  "17": { category: "devotional", title: { en: "Heaven's Gate — Detail Work", hi: "स्वर्ग द्वार — विस्तृत कार्य" } },
  "18": { category: "festivals", title: { en: "Pay 1 Mahotsav — Cricket & Carrom", hi: "पे 1 महोत्सव — क्रिकेट एवं कैरम" } },
  "19": { category: "festivals", title: { en: "Pay 1 Mahotsav — Celebration Scene", hi: "पे 1 महोत्सव — उत्सव दृश्य" } },
  "20": { category: "festivals", title: { en: "Pay 1 Mahotsav Storefront", hi: "पे 1 महोत्सव स्टोरफ्रंट" } },
  "21": { category: "devotional", title: { en: "Lord Ganesha — Large Cutout", hi: "गणेश जी — बड़ा कटआउट" } },
  "22": { category: "commercial", title: { en: "Whiskey Barrel Branding", hi: "व्हिस्की बैरल ब्रांडिंग" } },
  "23": { category: "devotional", title: { en: "Saint & Idol Collection — Painted", hi: "संत एवं मूर्ति संग्रह — चित्रित" } },
  "24": { category: "festivals", title: { en: "Happy Diwali — Glass Door", hi: "हैप्पी दिवाली — ग्लास डोर" } },
  "25": { category: "signs", title: { en: "Saahil Sir's Tuitions Shutter", hi: "साहिल सर ट्यूशन शटर" } },
  "26": { category: "devotional", title: { en: "Lakshmi — Shubh Labh Panel", hi: "लक्ष्मी — शुभ-लाभ पैनल" } },
  "27": { category: "devotional", title: { en: "Goddess Durga Idol Painting", hi: "दुर्गा माँ मूर्ति चित्रण" } },
  "28": { category: "devotional", title: { en: "Lakshmi Idol Painting", hi: "लक्ष्मी मूर्ति चित्रण" } },
  "29": { category: "festivals", title: { en: "Navratri Garba — Storefront", hi: "नवरात्रि गरबा — स्टोरफ्रंट" } },
  "30": { category: "commercial", title: { en: "INS Hamla Naval Emblem Mural", hi: "INS हमला नौसेना प्रतीक चित्र" } },
  "31": { category: "commercial", title: { en: "INS Hamla Building Mural", hi: "INS हमला भवन चित्र" } },
  "32": { category: "commercial", title: { en: "INS Hamla — Sailors & Emblem Detail", hi: "INS हमला — नाविक एवं प्रतीक" } },
  "33": { category: "signs", title: { en: "Gauri Excellency — Entrance Signage", hi: "गौरी एक्सीलेंसी — प्रवेश साइनबोर्ड" } },
};

export const paintings: Painting[] = Object.entries(files)
  .map(([path, mod]) => {
    const id = path.match(/(\d+)\.jpg$/)?.[1] ?? "";
    const m = meta[id];
    if (!m) return null;
    return { id, src: mod.default, ...m };
  })
  .filter((p): p is Painting => p !== null)
  .sort((a, b) => a.id.localeCompare(b.id));

export const categories: { id: Category | "all"; }[] = [
  { id: "all" },
  { id: "devotional" },
  { id: "festivals" },
  { id: "signs" },
  { id: "commercial" },
];

export const countByCategory = paintings.reduce(
  (acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  },
  {} as Record<Category, number>,
);

export const featuredIds = ["01", "15", "33", "27", "10", "06", "21", "29"];
export const featured = paintings.filter((p) => featuredIds.includes(p.id));
