var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Profissao = /** @class */ (function () {
    function Profissao() {
    }
    return Profissao;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getIdade", {
        get: function () {
            return this.idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setIdade", {
        set: function (idade) {
            this.idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.mostrarInfo = function () {
        return "".concat(this.nome, " tem ").concat(this.idade, " anos de idade.");
    };
    return Pessoa;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, idade, cpf) {
        var _this = _super.call(this, nome, idade) || this;
        _this.cpf = cpf;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaFisica.prototype, "setCpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    return PessoaFisica;
}(Pessoa));
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.cloneObject = function (object) {
        //return JSON.parse(JSON.stringify(Object.assign(object)));
    };
    return Utils;
}());
var pessoa1 = new Pessoa("Alexandre", 30);
var pessoa2 = new Pessoa("Pessoa qualquer", 32);
var pessoa3 = new PessoaFisica("Pessoa Física", 26, "0000000000");
var tenis1 = { tamanho: 44, estoque: true };
var tenis2 = { tamanho: 35, estoque: true };
console.log(pessoa1.mostrarInfo());
console.log(pessoa2.mostrarInfo());
console.log(pessoa3.mostrarInfo());
console.log(Utils.cloneObject([tenis1, tenis2]));
