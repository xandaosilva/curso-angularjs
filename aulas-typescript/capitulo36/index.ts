abstract class Profissao{
    protected abstract nome: string;
    protected abstract salario: number;
    public abstract calcSalarioComBonificacao(bonus: number): number;
}

class Pessoa{
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    get getNome(){
        return this.nome;
    }

    set setNome(nome: string){
        this.nome = nome;
    }

    get getIdade(){
        return this.idade;
    }
    set setIdade(idade: number){
        this.idade = idade;
    }

    public mostrarInfo(){
        return `${this.nome} tem ${this.idade} anos de idade.`;
    }
}

class PessoaFisica extends Pessoa{
    private cpf: string;
    constructor(nome: string, idade: number,cpf: string){
        super(nome, idade);
        this.cpf = cpf;
    }

    get getCpf(){
        return this.cpf;
    }

    set setCpf(cpf: string){
        this.cpf = cpf;
    }
}

class Utils{
    static cloneObject(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const pessoa1 = new Pessoa("Alexandre", 30);
const pessoa2 = new Pessoa("Pessoa qualquer", 32);
const pessoa3 = new PessoaFisica("Pessoa Física", 26, "0000000000");
const tenis1:{ tamanho: number, estoque: boolean } = { tamanho: 44, estoque: true };
const tenis2:{ tamanho: number, estoque: boolean } = { tamanho: 35, estoque: true };

console.log(pessoa1.mostrarInfo());
console.log(pessoa2.mostrarInfo());
console.log(pessoa3.mostrarInfo());
console.log(Utils.cloneObject([tenis1, tenis2]));
