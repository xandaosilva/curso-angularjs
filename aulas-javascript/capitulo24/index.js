// IMC
function calcularIMC(peso, altura) {
    const imc = (peso / Math.pow(altura, 2));
    return imc;
}

function classificarIMC(imc) {
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }
    return classificacao;
}

const meuIMC = calcularIMC(70, 1.75);
const minhaClassificacao = classificarIMC(meuIMC);
console.log("Cálculo de IMC");
console.log("Seu IMC é: " + meuIMC);
console.log("Sua classificação é: " + minhaClassificacao);
console.log();

// Tabuada
const numero = 10;

console.log("Tabuada");
for(let i = 0; i <= 10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
}

// Letras repetidas
console.log();
console.log("Letras repetidas");
const palavra = "Abacate".toLowerCase().replaceAll(" ", "");
let letras = {};

for(let i = 0; i < palavra.length; i++){
    letras[palavra[i]] = (letras[palavra[i]]) ? letras[palavra[i]] + 1 : 1;
}

console.log(letras);
