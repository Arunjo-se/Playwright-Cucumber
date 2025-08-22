const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');

let browser, context, page;

Before(async () => {
  browser = await chromium.launch({ headless: false }); // visible browser
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

Given('I open the browser', async function () {
  // browser + page are ready in Before hook
});

When('I navigate to {string}', async function (url) {
  await page.goto(url);
});

Then('I should see the title {string}', async function (expectedTitle) {
  const actualTitle = await page.title();
  console.log(`Actual title: "${actualTitle}"`);
});
