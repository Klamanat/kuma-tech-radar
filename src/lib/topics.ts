// รายการหัวข้อกลาง (single source) — ใช้ทั้ง filter bar, chip, และ validate
export const TOPICS = ["AI", "Cloud", "Web", "Startups"] as const;
export type Topic = (typeof TOPICS)[number];

export const TOPIC_LABEL: Record<Topic, string> = {
  AI: "AI / LLM",
  Cloud: "Cloud / DevOps",
  Web: "Web / Frameworks",
  Startups: "Startups",
};
