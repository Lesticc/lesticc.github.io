function textoAleatorio() {

  setInterval(() => {
    let numeroGerado = Math.floor(Math.random() * frases.length);
    textos.innerText = frases[numeroGerado];
  }, 5000);
}

window.onload = () => {
  textoAleatorio()

  var textos = document.getElementById("textos")
} // Script feito na lesticc.github.io/fmlleus