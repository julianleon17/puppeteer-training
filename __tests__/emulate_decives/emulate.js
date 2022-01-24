const puppeteer = require( 'puppeteer' );
let browser;
let page;


beforeAll( async () => {
    browser = await puppeteer.launch( { headless: "true" } );
    page = await browser.newPage();
} );

afterAll( async () => {
    await browser.close();
} );

describe( 'Emulate some devices', () => {

  it( 'test1: Emulate smartPhones by manual method', async () => {
    await page.emulate( {
      viewport: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false
      },
      userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
    } );

    await page.waitForTimeout( 3000 );
  } );

  it( 'test2: Emulate desktop site', async () => {
    await page.setViewport( {
      width: 1500,
      height: 800
    } );

    await page.waitForTimeout( 3000 );
  } );

  it( 'test3: Emulate tablet', async () => {
    const tablet = puppeteer.devices[ 'iPad Pro' ];

    await page.emulate( tablet );

    await page.waitForTimeout( 3000 );
  } );

  it( 'test4: Emulate iphone', async () => {
    const iphone = puppeteer.devices[ 'iPhone X' ];

    await page.emulate( iphone );

    await page.waitForTimeout( 3000 );
  } );

} );