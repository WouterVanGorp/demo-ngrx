import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokemon } from './../../models';
import { PokemonStoreService } from './../../services/poke-store.service';

@Component({
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;
  nameFilter$: Observable<string>;

  constructor(
    private router: Router,
    private pokeStore: PokemonStoreService
  ) {}

  ngOnInit(): void {
    this.pokeStore.loadPokemon();
    this.pokemon$ = this.pokeStore.pokemon$;
    this.nameFilter$ = this.pokeStore.nameFilter$;
  }

  goDetail(id: string) {
    this.router.navigate(['pokemon', id]);
  }

  search(name: string) {
    this.pokeStore.searchPokemon(name);
  }
}
