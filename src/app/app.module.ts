import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DetailComponent } from './pages/detail/detail.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CardComponent, ListContainerComponent, FilterComponent } from './components';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { POKE_STATE_KEY } from './store/state';
import { PokemonEffects } from './store/effects';
import { pokemonReducer } from './store/reducer';

const pages = [DetailComponent, OverviewComponent];

const components = [...pages, ListContainerComponent, CardComponent, FilterComponent];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    
    StoreModule.forFeature(POKE_STATE_KEY, pokemonReducer),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
