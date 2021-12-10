import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FinalpageGuard } from './finalpage.guard';

const routes: Routes = [
  {path: '', component: PokemonComponent, pathMatch: 'full'},
  {path: 'selected', component: FinalPageComponent, canActivate: [FinalpageGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
