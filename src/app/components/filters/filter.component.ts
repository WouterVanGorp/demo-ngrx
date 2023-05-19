import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-filter',
    template: `
    <div class="filter" [formGroup]="form">
      <mat-form-field>
        <mat-label>Pokemon</mat-label>
        <input type="text" matInput formControlName="name" />
      </mat-form-field>

      <button
        (click)="btnClicked()"
        mat-fab
        aria-label="Example icon button with a heart icon"
      >
        <mat-icon>favorite</mat-icon>
      </button>
    </div>
  `,
    styles: [
        `
      .filter {
        background-color: white;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 60px;
      }
    `,
    ],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
})
export class FilterComponent implements OnInit {
  @Input() name = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup<{name: FormControl<string>}>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({ name: this.name });
  }

  btnClicked() {
    this.search.emit(this.form.getRawValue().name);
  }
}
