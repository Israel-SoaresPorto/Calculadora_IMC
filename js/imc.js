/* Israel Soares Porto */

//DOM
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")

const calcular = document.querySelector("#calcular")

const seuIMC = document.querySelector("#seuIMC")
const situacao = document.querySelector("#situacao")

//Evento
calcular.addEventListener('click', calcularIMC)

//Função
function calcularIMC() {

    let imc = Number(peso.value) / (Number(altura.value * Number(altura.value)))

    seuIMC.textContent = "IMC: " + imc.toFixed(1)

    if (imc < 18.5) {
        seuIMC.classList.add("magreza")
        seuIMC.classList.remove("peso-normal")
        seuIMC.classList.remove("acima-do-peso")
        seuIMC.classList.remove("obesidade")
        situacao.textContent = "Voçê está com magreza"
    } else if (imc >= 18.5 && imc < 25) {
        seuIMC.classList.add("peso-normal")
        seuIMC.classList.remove("magreza")
        seuIMC.classList.remove("acima-do-peso")
        seuIMC.classList.remove("obesidade")
        situacao.textContent = "Seu peso está normal"
    } else if (imc >= 25 && imc < 30) {
        seuIMC.classList.add("acima-do-peso")
        seuIMC.classList.remove("magreza")
        seuIMC.classList.remove("peso-normal")
        seuIMC.classList.remove("obesidade")
        situacao.textContent = "Voçê está acima do peso"
    } else {
        seuIMC.classList.add("obesidade")
        seuIMC.classList.remove("magreza")
        seuIMC.classList.remove("peso-normal")
        seuIMC.classList.remove("acima-do-peso")
        situacao.textContent = "Voçê está com obesidade"
    }
}