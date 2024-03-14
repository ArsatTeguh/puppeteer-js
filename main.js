const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      // '--no-sandbox',
      // '--disable-gpu',
      '--enable-webgl',
      '--window-size=800,700',
    ],
  });

  const email = 'nurfah097@gmail.com';
  const password = '@Arsatteguh123';
  const loginUrl = 'https://www.tiktok.com/login/phone-or-email/email';

  const page = await browser.newPage();

  await page.goto(loginUrl);
  await page.type('input[name="username"]', email);
  await page.type('input[type="password"]', password);
  await page.keyboard.press('Enter');

  await page.waitForSelector('.css-9fq6q2-DivOneColumnContainer').then(async () => {
    console.log('content dimuat');
   await page.click('.css-1o0yumu-DivXMarkWrapper');
 
   await page.evaluate(() => {
      const elements = document.getElementsByClassName('e1hk3hf90');
      console.log(elements);
      for (let element of elements)
          element.click();
  });

  });

})();
