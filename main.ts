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

// --- Named constants -------------------------------------------------

// The file that names the entry's X post, at the repository root.
const POST_FILE = "POST.json";

// Environment variable that overrides where POST.json is copied to.
const OUTPUT_DIR_ENV = "OUTPUT_DIR";

// Output directory used when OUTPUT_DIR is not set.
const DEFAULT_OUTPUT_DIR = "/output";

// Directory containing this script = the repository root.
const REPO_ROOT = dirname(fileURLToPath(import.meta.url));

// --- Copy step -------------------------------------------------------

// Copy POST.json from the repository root into the output directory
// (creating that directory if needed) and report where it landed.
function copyPostFile(): void {
  const source = join(REPO_ROOT, POST_FILE);

  const outputDir = process.env[OUTPUT_DIR_ENV] ?? DEFAULT_OUTPUT_DIR;
  mkdirSync(outputDir, { recursive: true });

  const destination = join(outputDir, POST_FILE);
  copyFileSync(source, destination);

  console.log(`Copied ${POST_FILE} to ${destination}`);
}

copyPostFile();
