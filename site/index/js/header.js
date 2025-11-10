var headerElemento1 = `<br>
  <ul class="ulHEADER">
    <a href="/index.html" class="link-HEADER-Here">Início</a>
    <a href="/forum.html" class="link-HEADER">Fórum</a>
    <a href="/calc.html" class="link-HEADER">Calculadora</a>
  </ul>
<br>
<br>`
var headerElemento2 = `<br>
  <ul class="ulHEADER">
    <a href="/index.html" class="link-HEADER">Início</a>
    <a href="/forum.html" class="link-HEADER-Here">Fórum</a>
    <a href="/calc.html" class="link-HEADER">Calculadora</a>
  </ul>
<br>
<br>`
var headerElemento3 = `<br>
  <ul class="ulHEADER">
    <a href="/index.html" class="link-HEADER">Início</a>
    <a href="/forum.html" class="link-HEADER">Fórum</a>
    <a href="/calc.html" class="link-HEADER-Here">Calculadora</a>
  </ul>
<br>
<br>`
var headerElemento = `<br>
  <ul class="ulHEADER">
    <a href="/index.html" class="link-HEADER">Início</a>
    <a href="/forum.html" class="link-HEADER">Fórum</a>
    <a href="/calc.html" class="link-HEADER">Calculadora</a>
  </ul>
<br>
<br>`

console.log('headerElemento carregado')

window.onload = () => {
  console.log('header inicializado (header.js)')
  const header = document.getElementById('header')
  header.innerHTML = headerElemento
}