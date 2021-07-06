import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Pokemon } from './../../models';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  pokemon$: Observable<Pokemon>;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit() {
    const id$ = this.route.params.pipe(map((params) => params.id));

    this.pokemon$ = id$.pipe(switchMap((id) => this.pokeService.getCard(id)));
  }
}
