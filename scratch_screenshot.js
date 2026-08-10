const { chromium } = require("playwright");

const pages = [
  { url: "http://localhost:3000/", name: "home" },
  { url: "http://localhost:3000/about", name: "about" },
  { url: "http://localhost:3000/admission", name: "admission" },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  for (const p of pages) {
    await page.goto(p.url, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: `C:/Users/Administrator/AppData/Local/Temp/claude/c--Users-Administrator-Documents-vocationalschool/a348f061-5051-41c4-babc-c36d1a1b3ede/scratchpad/${p.name}.png`,
      fullPage: false,
    });
  }

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const info = await page.evaluate(() => {
    const h2 = document.querySelector("h2");
    const nav = document.querySelector("nav a");
    const body = document.body;
    const primaryBtn = document.querySelector("a.bg-primary, button.bg-primary");
    const cs = (el) => (el ? getComputedStyle(el) : null);
    const h2cs = cs(h2);
    const navcs = cs(nav);
    const bodycs = cs(body);
    return {
      h2: h2 ? { text: h2.textContent.trim().slice(0, 20), font: h2cs.fontFamily, weight: h2cs.fontWeight } : null,
      nav: nav ? { text: nav.textContent.trim().slice(0, 20), font: navcs.fontFamily, weight: navcs.fontWeight } : null,
      body: { font: bodycs.fontFamily, weight: bodycs.fontWeight },
      primaryBg: primaryBtn ? getComputedStyle(primaryBtn).backgroundColor : null,
    };
  });
  console.log("STYLE_INFO", JSON.stringify(info, null, 2));
  console.log("CONSOLE_ERRORS", JSON.stringify(errors.slice(0, 20)));

  await browser.close();
})();
