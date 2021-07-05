import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './pages/overview/overview.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'facts', component: OverviewComponent },
  { path: 'facts/:id', component: DetailComponent },
  { path: '**', redirectTo: 'facts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
