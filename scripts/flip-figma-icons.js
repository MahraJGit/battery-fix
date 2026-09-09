const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "public", "figma");
const files = [];

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".svg")) files.push(p);
  }
}

walk(root);

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const rel = path.relative(root, f);
  if (s.includes('data-flipped="1"')) {
    console.log("skip", rel);
    continue;
  }
  if (!s.includes('id="Icon"')) {
    console.log("no-icon", rel);
    continue;
  }
  const m = s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (!m) {
    console.log("no-vb", rel);
    continue;
  }
  const h = parseFloat(m[2]);
  s = s.replace(
    '<g id="Icon">',
    `<g id="Icon" data-flipped="1" transform="translate(0,${h}) scale(1,-1)">`,
  );
  s = s.replace("<svg ", '<svg data-flipped="1" ');
  fs.writeFileSync(f, s);
  console.log("flipped", rel);
}
