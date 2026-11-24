process.umask(0o022);
// The Houseplant Out-of-Office
// make.fun competition u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
//
// Writes one out-of-office auto-reply (120 characters max) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Same line every run. No network, no input, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until somebody waters me. Urgent stuff can wait by the window and photosynthesise. Dry since Tuesday.";

const MAX_CHARS = 120;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`reply is ${LINE.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("reply must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
