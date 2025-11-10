var primeiraFrase = true
var Primeirafrase = 0

function textoAleatorio() {
  setInterval(() => {
    gerarTexto();
  }, 5000);
}

function textoAleatorioLoad() {
  let numeroGerado = Math.floor(Math.random() * frases.length);
  textos.innerHTML = frases[numeroGerado];
}

function gerarTexto() { // Também conhecida como gambiarra para não dar o mesmo texto 2 vezes seguidas
  let numeroGerado = Math.floor(Math.random() * frases.length);
  textos.innerHTML = frases[numeroGerado];

  Primeirafrase = numeroGerado
}

window.onload = () => {
  const header = document.getElementById("header")
  header.innerHTML = headerElemento1

  textoAleatorio()
  textoAleatorioLoad()

  var textos = document.getElementById("textos")
} // Script feito na lesticc.github.io/fmlleus, última vez modificado em 12/09/2024