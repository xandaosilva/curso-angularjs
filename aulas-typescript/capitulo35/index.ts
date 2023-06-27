type alphanumeric = string | number;
enum Mes{
    JANEIRO,
    FEVEREIRO,
    MARCO,
    ABRIL,
    MAIO,
    JUNHO,
    JULHO,
    AGOSTO,
    SETEMBRO,
    OUTUBRO,
    NOVEMBRO,
    DEZEMBRO
}

const pedido: string = "Pizza";
const numeroPedido: number = 1234;

let pedidoConfirmado: boolean = true;

const listaFrutas: Array<string> = ["abacaxi", "kiwi", "maçã", "abacate", "uva"];
const pessoa: {nome: string; idade?: number; rg: string; cpf: string} = { nome: "Alexandre", idade:30, rg: "000000000000", cpf: "000000000000" }

let teste: string | boolean = "teste";
let dados: alphanumeric = 123;
let mouseEvent: "click" | "dbclick";

const mostrarMensagem = (value: any) => console.log(value);

console.log(pedido);
console.log(numeroPedido);
console.log(pedidoConfirmado);

mostrarMensagem("Hello world!");
mostrarMensagem("1, 2, 3 testando.");
mostrarMensagem(369);

console.log(listaFrutas);
console.log(pessoa);
console.log(teste);
console.log(dados);
console.log(Mes);
