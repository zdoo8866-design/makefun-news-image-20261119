// Entry program for the news-image-20261119 entry (Node 22, standard library only).
// The image beside this file is the entry; the program copies it to the output
// directory and then verifies the copy is complete by comparing byte sizes —
// a truncated copy would fail the gate, so the run refuses to pass silently.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(source, target);
// The copy is byte for byte, so repeated runs write identical output bytes.

const expected = statSync(source).size;
const written = statSync(target).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: wrote ${written} of ${expected} bytes`);
}
