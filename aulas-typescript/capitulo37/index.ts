interface IPessoa{
    nome: string,
    idade: number,
    rg: string,
    cpf: string,
    email: string
}

const pessoa: IPessoa = { nome: "Pessoa", idade: 40, rg: "000", cpf: "000000", email: "emailpessoal@email.com" };

console.log(pessoa);
