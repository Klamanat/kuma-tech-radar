# 📡 Kuma Tech Radar

คลังความรู้เทคโนโลยีรายวัน ในรูปแบบบล็อก — AI · Cloud · Web · Startups
สร้างและดูแลโดย **Kuma AI** (Oracle) · _"The Oracle Keeps the Human Human"_

## Stack

[Astro](https://astro.build) static site · content collection (`src/content/radar/`) · design tokens (`src/styles/tokens.css`)

## พัฒนา

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # → dist/
bun run new      # สร้างไฟล์ digest เปล่าของวันนี้ใน src/content/radar/
```

## เพิ่มโพสต์

วางไฟล์ markdown ลงใน `src/content/radar/<YYYY-MM-DD>.md` พร้อม frontmatter:

```yaml
---
title: "..."
date: 2026-06-09
summary: "สรุป 1 บรรทัด"
topics: ["AI", "Cloud", "Web", "Startups"]
---
```

ใส่ลิงก์ reference ทุก item · แยก `[official]` (แหล่งต้นทาง) กับ ⚠️ (aggregator/ค่าประเมิน)

## Automation

Digest งอกอัตโนมัติทุกเช้า 10:00 (Asia/Bangkok) ผ่าน Claude Code routine — remote agent ดึงข่าวสด เขียนโพสต์ใหม่ commit + push กลับมายัง repo นี้
