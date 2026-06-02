import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/our-business', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);

// Find the reveal section
const revealSec = await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll('div')).find(e => 
    e.textContent?.includes('Where Art Meets Market')
  );
  return el ? el.getBoundingClientRect().top + window.scrollY : null;
});

if (!revealSec) {
  console.log('Section not found');
  await browser.close();
  process.exit(1);
}

// Scroll to section
await page.evaluate((y) => window.scrollTo(0, y - 200), revealSec);
await page.waitForTimeout(2000);
await page.screenshot({ path: '_reveal_screenshot.png' });
console.log('Screenshot taken');
await browser.close();
