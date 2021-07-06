import { Component, Input } from '@angular/core';
import { Pokemon } from './../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      .card {
        display: inline-block;
        margin-left: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        

        &:hover {
        }
      }

      .img {
        width: 206px;
        height: 140px;
        background-repeat-x: no-repeat;
        background-position-x: -20px;
        background-position-y: -32px;
      }
    `,
  ],
})
export class CardComponent {
  @Input() pokemon: Pokemon;
}
