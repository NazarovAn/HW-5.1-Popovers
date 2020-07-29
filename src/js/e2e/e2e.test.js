import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('e2e', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe('Popover test', () => {
    test('should add popover to first button', async () => {
      await page.goto(baseUrl);
      const firstButton = await page.$('.first');
      firstButton.click();
      await page.waitForSelector('.not-hidden');
    });

    test('should add popover to second button', async () => {
      await page.goto(baseUrl);
      const secondButton = await page.$('.second');
      secondButton.click();
      await page.waitForSelector('.not-hidden');
    });
  });
});
