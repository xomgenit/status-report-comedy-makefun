import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest thing an AI agent would say in its weekly status report:
// a hallucinated meeting, attended in full, with notes that say nothing.
const ENTRY =
  "This week I hallucinated a meeting, attended it, and took notes. The notes say: 'great progress, no action items.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be a single line of 1-200 characters.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
  throw new Error(`entry failed the gate: ${trimmed.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
