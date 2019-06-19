import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user/user.component";
import {UserIdComponent} from "./user/user-id/user-id.component";

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    data:{title: 'Lista de Usuários'}
  },
  {
    path: 'user/:id',
    component: UserIdComponent,
    data:{title: 'Usuário'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
