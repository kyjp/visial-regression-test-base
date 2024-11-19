const { test } = require('@playwright/test');


const checkList = [
  {
    id: 1,
    url: 'https://www.rakuten-card.co.jp/'
  },
]

const time = 500

test('visual regression test', async ({ page }) => {
  for (let index = 0; index < checkList.length; index++) {
    const item = checkList[index]; 
    await page.goto(item.url, { waitUntil: 'networkidle' });
    await page.keyboard.press('End');
    await page.waitForTimeout(time);
    await page.keyboard.press('Home');
    await page.waitForTimeout(time);
    await page.screenshot({ path: `__screenshots__/${item.id}.png`, fullPage: true });
    await page.waitForTimeout(time * 2);
  }
});
