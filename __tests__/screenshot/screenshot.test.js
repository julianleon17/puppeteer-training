const puppeteer = require( 'puppeteer' );
let browser;
let page;

beforeAll( async () => {
  browser = await puppeteer.launch( { headless: true } );
  page = await browser.newPage();
} );

afterAll( async () => {
  await browser.close();
} );

describe( 'Take a screenshot', () => {

  it( 'Test1', async () => {
    await page.goto("https://google.com");
    await page.screenshot( { path: '__tests__/screenshot/screenshot.png' } );
  } );
} );
