import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from './../../services/pokemon.service';

@Component({
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  pokemon$: Observable<any>;

  constructor(private router: Router, private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokeService.getCards();
  }

  goDetail(id: string) {
    this.router.navigate(['pokemon', id]);
  }
}
