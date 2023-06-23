// Falsy - false, 0, "", null, undefined e NaN
// Truthy - demais valores diferentes do Falsy

const number = 30;
const res = ( number % 2 === 0 ) ? (`${number} é par`) : (`${number} é ímpar`);
let resAux = undefined;

if(number === 0)
    resAux = (`${number} é nulo`);
else if(number > 0)
    resAux = (`${number} é positivo`);
else
    resAux = (`${number} é negativo`);

console.log(res);
console.log(resAux);

const numeroDoMes = 3;
let mes = undefined;

switch (numeroDoMes) {
    case 1:
        mes = "Janeiro";
        break;
    case 2:
        mes = "Fevereiro";
        break;
    case 3:
        mes = "Março";
        break;
    case 4:
        mes = "Abril";
        break;
    case 5:
        mes = "Maio";
        break;
    case 6:
        mes = "Junho";
        break;
    case 7:
        mes = "Julho";
        break;
    case 8:
        mes = "Agosto";
        break;
    case 9:
        mes = "Setembro";
        break;
    case 10:
        mes = "Outubro";
        break;
    case 11:
        mes = "Novembro";
        break;
    case 12:
        mes = "Dezembro";
        break;
    default:
        mes = "Mês inválido";
        break;
}

console.log(mes);
