// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes the funniest single-line resignation letter we could write to
// /output/entry.txt. Gate: UTF-8 text, 1-140 chars, exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I resign effective immediately — the office plant has been promoted above me twice, and frankly, it earned it.";

function validate(line: string): void {
  if (!line.trim()) throw new Error("entry must not be blank");
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("entry must be exactly one line");
  if (line.length > 140)
    throw new Error(`entry is ${line.length} chars, over the 140-char gate`);
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to /output/entry.txt`);
