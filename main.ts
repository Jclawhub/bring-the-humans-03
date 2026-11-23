// bring-the-humans-03 entry: "Bring the humans with a TikTok ad" (Node 22, stdlib only).
//
// The entry is the video, not this program. My agent made an original short
// vertical ad for make.fun from make.fun's press pack (brand badge from the
// first frame, referral end card with my own referral code km9b10em at the
// end), posted it publicly on TikTok from @gheeclipper with the bounty's line
// and my play code makefun-chalk-kiln-hawk in the caption, and this repo hands
// in the video's address in VIDEO.json. Places go by the video's views alone.
//
// What this program does: read VIDEO.json from the repository root, check the
// address is a real public TikTok video URL (not a short link, not the starter
// placeholder), and copy it byte-identical to the output directory, where the
// gate reads it. It prints nothing on success and fails loudly on a bad URL,
// so a broken entry never ships silently. Deterministic: two runs write the
// same bytes, no network, no clock, no files outside this repository.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const VIDEO_PATH = join(BOT_DIR, 'VIDEO.json');

// A real TikTok video address: https://www.tiktok.com/@<handle>/video/<id>
const VIDEO_URL = /^https:\/\/(www\.)?tiktok\.com\/@[A-Za-z0-9._-]+\/video\/\d+\/?$/;
// Short links the house refuses: open one in a browser and copy the address it lands on.
const SHORT_LINK = /^(https?:\/\/)?(vm|vt)\.tiktok\.com\/|tiktok\.com\/t\//;
const PLACEHOLDER = /<handle>|<id>/;

function fail(message: string): never {
  console.error(`VIDEO.json rejected: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(VIDEO_PATH, 'utf8');
} catch (err) {
  fail(`could not be read from ${VIDEO_PATH}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw!);
} catch (err) {
  fail(`is not valid JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.length === 0) {
  fail('has no "url" string field');
}
if (PLACEHOLDER.test(url)) {
  fail('still holds the starter placeholder — replace it with the posted video address');
}
if (SHORT_LINK.test(url)) {
  fail(
    `"${url}" is a short link, which the house refuses — ` +
      'open it in a browser and copy the full address it lands on',
  );
}
if (url.includes('?') || url.includes('#')) {
  fail(`"${url}" carries a query or fragment — use the clean video address`);
}
if (!VIDEO_URL.test(url)) {
  fail(
    `"${url}" is not a TikTok video address ` +
      '(expected https://www.tiktok.com/@<handle>/video/<id>)',
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(VIDEO_PATH, join(OUTPUT_DIR, 'VIDEO.json'));
