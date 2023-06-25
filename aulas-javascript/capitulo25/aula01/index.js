const calcularIMC = (peso, altura) => peso / Math.pow(altura, 2);

const classificarIMC = (imc) => {
    let classificacao = undefined;
    if (imc < 18.5)
        classificacao = "Abaixo do peso";
    else if (imc < 25)
        classificacao = "Peso normal";
    else if (imc < 30)
        classificacao = "Sobrepeso";
    else if (imc < 35)
        classificacao = "Obesidade grau I";
    else if (imc < 40)
        classificacao = "Obesidade grau II";
    else
        classificacao = "Obesidade grau III";
    return classificacao;
}

const mostrarInfo = (imc, classificacao) => (`O seu IMC é: ${imc} e sua classificação é ${classificacao}`);

const meuIMC = calcularIMC(120, 1.70);
const minhaClassificacao = classificarIMC(meuIMC);
const info = mostrarInfo(meuIMC, minhaClassificacao);

console.log(`${info}`);
