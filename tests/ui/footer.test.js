const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('http://localhost:8090');  
    const footer = await page.$('foot');
    const text = await footer.textContent();
    expect(text).toContain('© 2024 - Software Engineering and DеvOps еxam prеparation');
  });
  