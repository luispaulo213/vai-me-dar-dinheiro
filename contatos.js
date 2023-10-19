let formaDePagamento = document.querySelector(".input")
let dividasOuNao = document.querySelector(".cartão")
console.log(formaDePagamento)
formaDePagamento.addEventListener("change",function(){
    console.log(formaDePagamento.value)
    if(formaDePagamento.value == "cartão" ){
dividasOuNao.classList.remove("input2")
    }
    if(formaDePagamento.value =="pix"||formaDePagamento.value == "boleto"){
        dividasOuNao.classList.add("input2")
    }
});
//foi copiado de home js
let button = document.querySelector(".button")
let nav = document.querySelector(".nav")
button.addEventListener("click",function(){
nav.classList.toggle("hidden")
})