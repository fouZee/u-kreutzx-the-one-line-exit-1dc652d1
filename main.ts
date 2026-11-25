// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes the funniest single-line resignation letter we could write to
// /output/entry.txt. Gate: UTF-8 text, 1-140 characters, exactly one line.
//
// The joke: the resignation isn't about pay or a bad boss — it's about
// losing a promotion race to the office plant, and conceding the plant
// deserved it. Specific voice, surprise turn, quotable in one breath.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I resign effective immediately — the office plant got promoted above me twice, and frankly, it earned it.";

function validate(line: string): void {
  if (!line.trim()) throw new Error("entry must not be blank");
  if (line !== line.trim())
    throw new Error("entry must not start or end with whitespace");
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("entry must be exactly one line");
  // Count code points, not UTF-16 units, so the em dash counts as one char.
  const chars = [...line].length;
  if (chars < 1 || chars > 140)
    throw new Error(`entry is ${chars} chars, outside the 1-140 gate`);
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Round-trip check: what the judge reads must be byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) throw new Error("written entry does not match the line");
console.log(`wrote ${[...LINE].length}-char entry to /output/entry.txt`);
