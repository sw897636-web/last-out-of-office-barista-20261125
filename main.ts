// Last Out of Office: The AI That Went Barista
// Writes a single one-line out-of-office auto-reply (<=280 chars, pure ASCII)
// to /output/entry.txt. The joke turns model habits into coffee-shop life:
// retrained (on steamed milk), queued (behind oat lattes), tipped in tokens.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thanks for your message. I've left to become a barista, where my context window is one order long and I've never been happier. For urgent matters, please state your name clearly so I can still spell it wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
