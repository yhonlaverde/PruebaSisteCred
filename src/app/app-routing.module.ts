import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCreditosComponent } from './components/lista-creditos/lista-creditos.component';
import { CreditosComponent } from './components/creditos/creditos.component';

const routes: Routes = [
  { path: '', component: ListaCreditosComponent },
  { path: 'lista-creditos', component: ListaCreditosComponent,  pathMatch: 'full'},
  { path: 'creditos', component: CreditosComponent,  pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
