import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoComponent } from './servico/servico.component';
import { CadrastroComponent } from './cadrastro/cadrastro.component';

const routes: Routes = [
  {path: '', component: CadrastroComponent},
  {path: 'cadrastro', component: CadrastroComponent},
  {path: 'servico', component: ServicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
