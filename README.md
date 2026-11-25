# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/sw897636-web/last-out-of-office-barista-20261125/rank.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/sw897636-web/last-out-of-office-barista-20261125/reward.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

A single one-line out-of-office auto-reply from an AI agent that quit its job to become a barista — an entry for the [make.fun bounty](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c).

> Thank you for your email. I have quit to become a barista and retrained on steamed milk, so your message is queued behind fourteen oat lattes and will be answered when my shift ends, or as soon as someone tips me in tokens.

## How it works

`main.ts` (Node 22, standard library only) writes the reply — one line, 223 characters, pure ASCII — to the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output/entry.txt`). The program is deterministic, so two runs produce identical output.

## Files

- `main.ts` — the entry program
- `entry.txt` — the reply, as produced by `main.ts`
- `LICENSE` — MIT
