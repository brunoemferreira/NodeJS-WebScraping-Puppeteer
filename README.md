<!-- ************************************* Título ********************************************* -->
<h1 align="center"> Web Scraping com NodeJS e Puppeteer </h1>

<!-- ************************************* Baadges ********************************************* -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoemferreira/NodeJS-WebScraping-Puppeteer?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoemferreira/NodeJS-WebScraping-Puppeteer">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoemferreira/NodeJS-WebScraping-Puppeteer">
</p>

<p align="center" > Finalizado 05/02/2021 </p> 

## 🚀 Sobre o Projeto

Foram criados exemplos para criação de Web Scraping's utilizando NodeJS e Puppeteer, esses exemplos englobam algumas situações que nos deparamos ao querer utilizar o web Scraping para reunir informações de um site, como tirar prints, extrair dados do site, clicar em botões e fazer navegações, essas são só algumas das funcionalidades que o Puppeteer oferece para manipulação e extração de informações de sites.   

</br>
<h3> 📗 Exemplo 1  - Tirar Print do Site </h3>

O Exemplo 1 consiste em : 
 * Abrir o browser em modo background;
 * Criar uma nova Aba no browser;
 * Acessar a Home page informada;   
 * Tirar um Screenshot da pagina e armazena na pasta do projeto;
 * fechar o Browser; 

<h3> 📕 Exemplo 2 - Extrair Dados da página </h3>

O Exemplo 2 consiste em : 
 * Abrir o browser em modo background;
 * Criar uma nova Aba no browser;
 * Acessar a Home page informada;  
 * Percorre aa página buscando o atributo alt ( que é o atributo que possui a descrição dos livros que fica na imagem ) e grava num array result; 
 * Mostra os dados extraídos no console do terminal;
 * Fecha o Browser
 * Executa uma função que mostra no console.log() o que retornou do result;

<h3> 📙 Exemplo 3 - Iteração com Cliques </h3>

 * Abrir o browser em modo visual;
 * Criar uma nova Aba no browser;
 * Acessar a Home page informada;  
 * Dá um clique no elemento informado;
 * Executa uma função que faz o aguardo da navegação que aguarda a navegação para outra página;  
 * Tira um screenShot do browser no momento;
 * busca algumas informações do Livro e grava em um array;
 * Fecha o browser
 * Executa uma função com os valores resgatados do livro e mostra no console.log();

</br>

## 🛠️ Construído com

* [Vs Code](https://code.visualstudio.com/) - IDE
* [NodeJS](https://nodejs.org/en/) - Ambiente de execução Javascript
* [Puppeteer](https://pptr.dev/) - Puppeteer é uma biblioteca Node que fornece uma API de alto nível para controlar o Chrome ou Chromium sobre o protocolo DevTools.

</br>

<h3> 🎲 Rodando os Exemplos</h3>

Serve para todos os exemplos : 

```bash
# Clone este repositório dos exemplos ( aqui ja possui todos os exemplos )
$ https://github.com/brunoemferreira/NodeJS-WebScraping-Puppeteer.git
```

<h4>Exemplo 1</h4>

```bash
# Acesse a pasta backend
$ cd example1

# execute o comando
$ node example1.js
```

<h4>Exemplo 2</h4>

```bash
# Acesse a pasta backend
$ cd example2

# execute o comando
$ node example2.js
```

<h4>Exemplo 3</h4>

```bash
# Acesse a pasta backend
$ cd example3

# execute o comando
$ node example3.js
```

<h3>Referência</h3>

* [Fábio Jânio](https://medium.com/@fabiojanio/node-js-web-scraping-com-puppeteer-29dd974eb042)



---
⌨️ com ❤️ por [Bruno Eduardo](https://gist.github.com/brunoemferreira) 😊
