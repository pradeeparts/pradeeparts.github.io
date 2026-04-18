import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const SRC = "src/assets/logo.png";
const OUT = "public";

await mkdir(OUT, { recursive: true });

const tasks = [
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192.png", size: 192 },
  { name: "android-chrome-512.png", size: 512 },
  { name: "og-image.jpg", size: 1200, height: 630, format: "jpeg", fit: "contain", bg: { r: 255, g: 255, b: 255 } },
  { name: "logo-optimized.png", size: 512 },
  { name: "logo-small.webp", size: 128, format: "webp" },
];

for (const t of tasks) {
  const out = join(OUT, t.name);
  let pipe = sharp(SRC).resize(t.size, t.height ?? t.size, {
    fit: t.fit ?? "cover",
    background: t.bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
  });
  if (t.format === "jpeg") pipe = pipe.flatten({ background: t.bg }).jpeg({ quality: 88 });
  else if (t.format === "webp") pipe = pipe.webp({ quality: 90 });
  else pipe = pipe.png({ compressionLevel: 9 });
  await pipe.toFile(out);
  console.log(`✓ ${t.name}`);
}

await sharp(SRC).resize(64, 64).toFile(join(OUT, "favicon.png"));
console.log("✓ favicon.png");
console.log("\nFavicons generated in public/");
