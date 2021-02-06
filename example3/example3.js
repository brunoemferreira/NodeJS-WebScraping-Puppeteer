const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false }) // se não passar nada não abre o browser agora se passar { headless: false } ele mostra o processo todop no browser
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  
  // Faz o click nesse local dentro de um h3 teinha um link
  page.click('h3 > a')
  // aguarda que o conteúdo da página seja carregado
  await page.waitForNavigation()
  // tira o screencshot da tela 
  await page.screenshot({ path: 'example3.png' })
  
  const title = await page.$eval(
    'div.product_main h1', divs => divs.innerText
  )
  const price = await page.$eval(
    'div.product_main .price_color', divs => divs.innerText
  )
  browser.close()
  return {title, price}
};
scrape().then((value) => {
  console.log(value)
})