import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { PokemonEffects } from './app/store/effects';
import { pokemonReducer } from './app/store/reducer';
import { POKE_STATE_KEY } from './app/store/state';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            AppRoutingModule,
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            StoreDevtoolsModule.instrument({
                maxAge: 25, // Retains last 25 states
            }),
            StoreModule.forFeature(POKE_STATE_KEY, pokemonReducer),
            EffectsModule.forFeature([PokemonEffects]),
        ),
        provideAnimations(),
        provideHttpClient()
    ],
}).catch((err) => console.error(err));
