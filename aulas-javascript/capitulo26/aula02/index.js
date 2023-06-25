const Employee = {
    name: "Cliente do sistema",
    age: 37,
    email: "cliente@email.com",
    salary: 5000,

    getInfo: () => `Informações do funcionário: ${Employee.name}, Idade: ${Employee.age}, Email: ${Employee.email}, Salário: ${Employee.salary}`
}

const { name, age, email } = Employee;
const { email: user } = Employee;
const checkIfHasSalario = Employee.hasOwnProperty("salario");
const checkIfHasSalary = Employee.hasOwnProperty("salary");

console.log(Employee.name);
console.log(Employee.age);
console.log(Employee.email);
console.log(Employee.salary);
console.log(Employee.getInfo());
console.log(name, age, email);
console.log(user);
console.log(checkIfHasSalario);
console.log(checkIfHasSalary);
