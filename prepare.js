// Quraşdırma zamanı www/ qovluğunu yığır: index.html + oflayn kitabxanalar
const fs = require("fs");
const path = require("path");
fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www/vendor", { recursive: true });
fs.copyFileSync("index.html", "www/index.html");
fs.copyFileSync(
  path.join("node_modules", "@supabase", "supabase-js", "dist", "umd", "supabase.js"),
  "www/vendor/supabase.js"
);
fs.copyFileSync(
  path.join("node_modules", "three", "build", "three.module.min.js"),
  "www/vendor/three.module.min.js"
);
console.log("www hazırdır");
