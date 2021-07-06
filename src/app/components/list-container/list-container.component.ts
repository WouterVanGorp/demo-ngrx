import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from './../../models';

@Component({
  selector: 'app-list',
  template: `
    <div class="list">
      <div class="item" *ngFor="let item of list">
        <app-card (click)="pokeClick.emit(item.id)" [pokemon]="item"></app-card>
      </div>
    </div>
  `,
  styles: [
    `
      .list {
        heigth: 100%;
      }
      .item {
        display: inline-block;
      }
    `,
  ],
})
export class ListContainerComponent {
  @Input() list: Pokemon[];
  @Output() pokeClick: EventEmitter<string> = new EventEmitter<string>();
}
