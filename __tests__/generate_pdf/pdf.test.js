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

describe( 'Generate a PDF', () => {

  jest.setTimeout(10000);


  it( 'Test1', async () => {
    let pdfCSS = [];

    pdfCSS.push( '<style>' );
    pdfCSS.push( 'h1 { font-size: 10px; margin-left: 30px; }' );
    pdfCSS.push( '</style>' );

    const css = pdfCSS.join( '' );

   await page.pdf( {
     path: './__tests__/generate_pdf/example.pdf',
     format: 'A4',
     printBackground: true,
     displayHeaderFooter: true,
     headerTemplate: css + '<h1>My first PDF</h1>',
     footerTemplate: css + '<h1> <span class="pageNumber" ></span> of <span class="totalPages" ></span> </h1>',
     margin: {
       top: '100px',
       bottom: '200px',
       right: '30px',
       left: '30px',
     },
   } );

  } );
} );
