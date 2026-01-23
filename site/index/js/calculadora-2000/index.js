var primeiraFrase = true
var Primeirafrase = 0

function textoAleatorio() {
  setInterval(() => {
    gerarTexto();
  }, 5000);
}

function textoAleatorioLoad() {
  let numeroGerado = Math.floor(Math.random() * frases.length);
  textos.innerText = frases[numeroGerado];
}

function gerarTexto() { // Também conhecida como gambiarra para não dar o mesmo texto 2 vezes seguidas
  let numeroGerado = Math.floor(Math.random() * frases.length);
  textos.innerText = frases[numeroGerado];

  Primeirafrase = numeroGerado
}

window.onload = function() {

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const header = document.getElementById("header")
header.innerHTML = headerElemento3

textoAleatorioLoad()
textoAleatorio()

var textos = document.getElementById("textos")

// tudo que vai rodar quando o site iniciar fica aqui dentro

var textarea = document.getElementById("textarea");
var botao = document.getElementById("botao");
var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");

// Varíaveis da Calculadora 

var pi = 3.141592653589793235
var π = pi
var Pi = pi
var pI = pi
var PI = pi

var e = 2.7182818284 

false == "Falso"

function Raiz(numero) {
    return Math.sqrt(numero);
}

Meleus = "meleus"
meleus = "meleus"

botao.onclick = function() {
    // tudo q estiver aqui dentro vai acontecer quando clicar no botão
        if(eval(textarea.value) == undefined) {
            resultado.innerText = "" // Limpa o resultado anterior.
            textarea.value = "Crie uma expressão numérica!"
        }else if(eval(textarea.value) == 0){
            resultado.innerText = "0"
        }else if(eval(textarea.value) == 1){
            resultado.innerText = "1"
        }else if(eval(textarea.value) == true ){
            resultado.innerText = "Verdadeiro"
        }else if(eval(textarea.value) == false ){
            resultado.innerText = "Falso"
        }else if(textarea.value=="0/0"||textarea.value=="0 /0"||textarea.value=="0/ 0"||textarea.value=="0 / 0"){
            LimparResultado()
            trpontosend()
        }else if(textarea.value=="meleus"){
            rodar()
            async function rodar(){
                resultado.innerText = "Você é a escolhida."
                await delay(800)
                resultado.innerText = "Espere 4 segundos!"
                await delay(1000)
                resultado.innerText = "Espere 3 segundos!"
                await delay(1000)
                resultado.innerText = "Espere 2 segundos!"
                await delay(1000)
                resultado.innerText = "Espere 1 segundo!"
                await delay(1000)
                resultado.innerHTML = `<video src="https://cdn.mtdv.me/video/rick.mp4" controls autoplay id="videoRickRoll"/>`
                const videoRickRoll = document.getElementById("videoRickRoll")
                videoRickRoll.style.height = '180px'
                videoRickRoll.style.width = '300px'
                window.onload()
            }
        }else{
            resultado.innerText = eval(textarea.value)
            console.log(`Calculo realizado:\n${textarea.value}`)
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
}async function trpontosend(){
    await delay(500)
    trpontosum()
    await delay(500)
    trpontosdo()
    await delay(500)
    trpontostr()
    await delay(500)
    resultado.innerText = "Você será o próximo."
}

// *************

// ********************************

}

/*

document.addEventListener("keyup", function FunctionEnter(event) {

    if(event.key === "Enter"){
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
})*/