import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/our-business', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: '_our_biz_top.png' });
console.log('1. Top of page');

await page.evaluate(() => window.scrollBy(0, 1200));
await page.waitForTimeout(1500);
await page.screenshot({ path: '_our_biz_reveal.png' });
console.log('2. Reveal section visible');

await browser.close();
