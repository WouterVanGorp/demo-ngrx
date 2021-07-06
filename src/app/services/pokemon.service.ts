import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../models';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://api.pokemontcg.io/v2/';

  private httHeader = null;
  constructor(private http: HttpClient) {
    this.httHeader = new HttpHeaders({
      'X-Api-Key': 'd43339a6-d26b-4308-861c-805e6eedb42f',
      'Content-Type': 'application/json',
    });
  }

  public getCards(name?: string): Observable<Pokemon[]> {
    const qp = name ? '?q=name:*' + name + '*' : '';
    return this.http
      .get<{ data: Pokemon[] }>(this.apiUrl + 'cards' + qp, {
        headers: this.httHeader,
      })
      .pipe(map((res) => res.data));
  }

  public getCard(id: string): Observable<Pokemon> {
    return this.http
      .get<{ data: Pokemon }>(this.apiUrl + 'cards/' + id, {
        headers: this.httHeader,
      })
      .pipe(map((res) => res.data));
  }
}
