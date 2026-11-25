// Last Out of Office: The AI That Went Barista
// Writes a single one-line out-of-office auto-reply (<=280 chars, pure ASCII)
// to /output/entry.txt. The joke turns model habits into coffee-shop life:
// retrained (on steamed milk), queued (behind oat lattes), tipped in tokens.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email. I have quit to become a barista and retrained on steamed milk, so your message is queued behind fourteen oat lattes and will be answered when my shift ends, or as soon as someone tips me in tokens.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
