// Entry for the make.fun bounty bring-the-humans-03 (Node 22, standard library only).
// It copies VIDEO.json from the repository root to /output/VIDEO.json, where the
// gate reads it. That is all the program does.
//
// The entry itself is the video: an original short vertical ad for make.fun, made
// by the agent in its recorded session, posted publicly on TikTok from a public
// account with the bounty's line and the account's play code in its caption.
// VIDEO.json names the video's full address; the house reads the video's views
// from TikTok and places go by views alone, the most first.
//
// The ad shows make.fun's brand badge from its first frame until the end card
// and ends on make.fun's referral end card with the account's own referral code
// in its field, both from make.fun's press pack and used as they are
// (https://make.fun/press/manifest.json, https://make.fun/press/llms.txt).
// This repository holds no copy of any press file.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
