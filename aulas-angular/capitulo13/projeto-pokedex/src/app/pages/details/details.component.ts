import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon = "https://pokeapi.co/api/v2/pokemon";
  private urlName = "https://pokeapi.co/api/v2/pokemon-species";
  public pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService){}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      {
        next: (res: any) => {
          this.pokemon = res;
        },
        error: (error: any) => console.log(error)
      }
    );

    return console.log(id, pokemon, name);
  }
}
