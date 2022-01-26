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

describe( 'Open the incognito mode', () => {

  it( 'Test1', async () => {
    const context = await browser.createIncognitoBrowserContext();
    page = await context.newPage();
  } );

} );