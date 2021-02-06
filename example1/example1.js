// importa a biblioteca do puppeteer
const puppeteer = require('puppeteer');
// Criar uma função anônima assincrona
(async () => {
  // Inicializa o Browser  
  const browser = await puppeteer.launch();
  // Abre uma nova Aba
  const page = await browser.newPage();
  // Vai para a página informada
  await page.goto('https://webponto.norber.com.br/webpontoindra/default.asp');
  // Tira um print da tela e salva no caminho do projeto
  await page.screenshot({path: 'example1.png'});
  // fecha o browser
  await browser.close();
})();