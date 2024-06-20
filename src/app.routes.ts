import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiffComponent } from './diff/diff.component';

export const routes: Routes = [
  { path: '', redirectTo: '/diff', pathMatch: 'full' },
  { path: 'diff', component: DiffComponent } // Corrected path without leading slash
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
