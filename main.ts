// Last Text at One Percent — make.fun bounty entry.
//
// A program that writes the funniest final text a dying phone sends at
// one percent battery, in the phone's own voice. The text is a fixed,
// hand-written line: the phone uses its last breath to snitch on its
// owner (passcode, search history) and complain that it still gets
// blamed for dying. One joke, one voice, no wasted words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "1%. Last words: his passcode is 0000, his search history is a crime scene, and he still blames me for dying.";

// The gate only accepts 1-200 characters of non-blank UTF-8 text, so
// refuse to write anything that cannot pass it instead of shipping it.
if (TEXT.trim().length === 0 || TEXT.length > 200) {
  throw new Error(`entry text is ${TEXT.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
console.log(`wrote ${TEXT.length} chars to ${outPath}`);
