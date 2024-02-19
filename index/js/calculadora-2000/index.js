function textoAleatorio() {

    setInterval(() => {
      let numeroGerado = Math.floor(Math.random() * frases.length);
      textos.innerText = frases[numeroGerado];
    }, 5000);
}
function textoAleatorioLoad() {
    let numeroGerado = Math.floor(Math.random() * frases.length);
    textos.innerText = frases[numeroGerado];
}

window.onload = function() {
    // tudo que vai rodar quando o site iniciar fica aqui dentro

var textarea = document.getElementById("textarea");
var botao = document.getElementById("botao");
var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");

// Varíaveis da Calculadora 

var pi = 3.1415926535
var π = pi.valueOf(pi)
var Pi = pi.valueOf(pi)
var pI = pi.valueOf(pi)
var PI = pi.valueOf(pi) 

var e = 2.7182818284
var E = e.valueOf(e)

botao.onclick = function() {
    // tudo q estiver aqui dentro vai acontecer quando clicar no botão
    if(eval(textarea.value) == undefined) {
        resultado.innerText = "" // Limpa o resultado anterior.
        textarea.value = "Crie uma expressão numérica!"
    }
    else {
        resultado.innerText = eval(textarea.value)
    }
    if(eval(textarea.value) == true ){
        resultado.innerText = "Verdadeiro"
    }
    if(eval(textarea.value) == false ){
        resultado.innerText = "Falso"
    }   
    if(textarea.value == "0/0"){
        LimparResultado()
        trpontosend()
    }
  }

// Funções da Calculadora Especiais
function LimparResultado(){
    resultado.innerText = ""
}

// Função do 0/0
function trpontosum(){
    resultado.innerText = "."
}function trpontosdo(){
    resultado.innerText = ".."
}function trpontostr(){
    resultado.innerText = "..."
}function trpontosend(){

    setTimeout(() => {
        trpontosum()

        setTimeout(() => {
            trpontosdo()
            
            setTimeout(() => {
                trpontostr()

                setTimeout(() => {
                    
                    LimparResultado();

                }, 500);

            }, 500);

        }, 500);

    }, 500);

}
// *************

// ********************************

  textoAleatorio()
  textoAleatorioLoad()

  var textos = document.getElementById("textos");

}