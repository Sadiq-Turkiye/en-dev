import { copyFile, mkdir, writeFile } from "node:fs/promises";

const output = new URL("../docs/", import.meta.url);
const entry = new URL("index.html", output);

// Pages serves files directly. Supply an entry point for each client route so
// opening a shared link or refreshing a page does not return a 404.
for (const route of ["portfolio", "partners", "contact", "about"]) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(entry, new URL("index.html", directory));
}

await copyFile(entry, new URL("404.html", output));
await writeFile(new URL(".nojekyll", output), "");
console.log("GitHub Pages entry points prepared in docs/.");
