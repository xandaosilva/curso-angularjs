import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listStates: Array<{state: string, capital: string}> = [ 
    { state: 'Acre', capital: 'Rio Branco' },
    { state: 'Alagoas', capital: 'Maceió' },
    { state: 'Amapá', capital: 'Macapá' },
    { state: 'Amazonas', capital: 'Manaus' },
    { state: 'Bahia', capital: 'Salvador' },
    { state: 'Ceará', capital: 'Fortaleza' },
    { state: 'Distrito Federal', capital: 'Brasília' },
    { state: 'Espírito Santo', capital: 'Vitória' },
    { state: 'Goiás', capital: 'Goiânia' },
    { state: 'Maranhão', capital: 'São Luiz' },
    { state: 'Mato Grosso', capital: 'Cuiabá' },
    { state: 'Mato Grosso do Sul', capital: 'Campo Grande' },
    { state: 'Minas Gerais', capital: 'Belo Horizonte' },
    { state: 'Pará', capital: 'Belém' },
    { state: 'Paraíba', capital: 'João Pessoa' },
    { state: 'Paraná', capital: 'Curitiba' },
    { state: 'Pernambuco', capital: 'Recife' },
    { state: 'Piauí', capital: 'Teresina' },
    { state: 'Rio de Janeiro', capital: 'Rio de Janeiro' },
    { state: 'Rio Grande do Norte', capital: 'Natal' },
    { state: 'Rio Grande do Sul', capital: 'Porto Alegre' },
    { state: 'Rondônia', capital: 'Porto Velho' },
    { state: 'Roraima', capital:'Boa Vista' },
    { state: 'Santa Catarina', capital:'Florianópolis' },
    { state: 'São Paulo', capital:'São Paulo' },
    { state: 'Sergipe', capital:'Aracaju' },
    { state: 'Tocantins', capital:'Palmas' }
  ];

  constructor(){}

  ngOnInit(): void {
  }

  public submitForm(form: NgForm){
    console.log(form.value);
  }
}
