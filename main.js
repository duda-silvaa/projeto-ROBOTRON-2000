/* const robotron = document.querySelector("#robroton")

robotron.addEventListener("click", dizOla)

dessa forma usa uma funcao anonima 
robotron.addEventListener("click", function(){
    console.log("ola")
}) 
a diferenca e q funcao anonima n pdoe ser chmada, pois ela n foi declarada, logo ela 
e executada apenas quando o evento do click for feito.

outra forma de funcao anonima:
robotron.addEventListener("click", () => {
    console.log("ola") funcoes de setas 
})
funcao sereve para armazenar pedacos de cog

function dizOla(nome){
    console.log("oi " + nome);
    console.log("Bem Vinda");
}

dizOla("duda") */

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
 
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaestatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaestatisticas(peca){
   estatistica.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

   } )
}