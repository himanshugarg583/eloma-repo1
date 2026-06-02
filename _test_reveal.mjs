import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/our-business', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);

const revealSec = await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll('div')).find(e => 
    e.textContent?.includes('unique pieces connects you to world')
  );
  return el ? { top: el.getBoundingClientRect().top + window.scrollY, height: el.clientHeight } : null;
});

if (!revealSec) {
  console.log('Reveal section not found');
  await browser.close();
  process.exit(1);
}

console.log('Reveal section found at', revealSec.top);

await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 800)), revealSec.top);
await page.waitForTimeout(1200);
await page.screenshot({ path: '_reveal_before.png' });
console.log('1. Before animation');

await page.evaluate((y) => window.scrollTo(0, y - 200), revealSec.top);
await page.waitForTimeout(1500);
await page.screenshot({ path: '_reveal_during.png' });
console.log('2. During/after animation');

await page.evaluate((y) => window.scrollTo(0, y + 600), revealSec.top);
await page.waitForTimeout(1000);
await page.screenshot({ path: '_reveal_after.png' });
console.log('3. After scrolling past');

await browser.close();
console.log('done');
