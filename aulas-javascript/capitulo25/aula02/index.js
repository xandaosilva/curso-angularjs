class Client{
    constructor(name, age, rg, cpf){
        this.name = name;
        this.age = age;
        this.rg = rg;
        this .cpf = cpf;
    }
}

const client = new Client("Primeiro Cliente", 47, "000000000", "000.000.000-00");

console.log(client);
