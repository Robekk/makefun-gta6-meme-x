// main.ts — make.fun entry program for bounty gta6-meme-x-01
// ("Post a GTA 6 meme on X").
//
// The entry itself is the X post named in POST.json at the repository
// root. This program's only job is to hand that file to the grader:
// it copies POST.json from the repository root (the directory this
// script lives in) into the output directory.
//
// Standard library only (node: builtins). Run with Node 22+.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Directory containing this script = the repository root.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "POST.json");

// Output directory: OUTPUT_DIR env var if set, otherwise /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, "POST.json");
copyFileSync(source, destination);

console.log(`Copied POST.json to ${destination}`);
