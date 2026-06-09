// สร้างไฟล์ digest เปล่าสำหรับวันนี้ลงใน src/content/radar/
// ใช้: npm run new   (หรือ node scripts/new-digest.mjs 2026-06-10)
import { writeFile, mkdir, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "..", "src", "content", "radar");

const arg = process.argv[2];
const d = arg ? new Date(arg) : new Date();
const iso = d.toISOString().slice(0, 10);
const file = join(dir, `${iso}.md`);

const template = `---
title: "Tech Radar — <หัวข้อสรุปสั้น>"
date: ${iso}
summary: "<สรุป 1 บรรทัด>"
topics: ["AI", "Cloud", "Web", "Startups"]
---

> **หมายเหตุความน่าเชื่อถือ:** [official] = ยืนยันจากแหล่งต้นทาง · ⚠️ = aggregator/ค่าประเมิน ควร verify

## 🤖 AI / LLM / Agents

- ...

## ☸️ Cloud / DevOps / Infra

- ...

## 🌐 Web / Frameworks / Languages

- ...

## 🚀 Startups / Products

- ...

---

## 🔑 สรุปวันนี้

...
`;

await mkdir(dir, { recursive: true });
try {
  await access(file);
  console.error(`มีไฟล์อยู่แล้ว: ${file}`);
  process.exit(1);
} catch {
  await writeFile(file, template, "utf8");
  console.log(`สร้างแล้ว: ${file}`);
}
