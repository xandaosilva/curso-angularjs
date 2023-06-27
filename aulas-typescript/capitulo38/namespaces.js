"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa;
(function (Pessoa) {
    var PessoaFisica;
    (function (PessoaFisica) {
        PessoaFisica.nome = "Primeira Pessoa";
        PessoaFisica.cpf = "0000000000";
    })(PessoaFisica = Pessoa.PessoaFisica || (Pessoa.PessoaFisica = {}));
    var PessoaJuridica;
    (function (PessoaJuridica) {
        PessoaJuridica.nome = "Segunda Pessoa";
        PessoaJuridica.cnpj = "1111111111111111";
    })(PessoaJuridica = Pessoa.PessoaJuridica || (Pessoa.PessoaJuridica = {}));
})(Pessoa || (exports.Pessoa = Pessoa = {}));
