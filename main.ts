import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `"Hold this," my daughter says, and puts the spool in my hand.
I hold it tight. The kite tugs, climbs, takes the wind.
My father held the string for me once. Now I hold it for her —
and let it run, the line slipping through my open palm.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
