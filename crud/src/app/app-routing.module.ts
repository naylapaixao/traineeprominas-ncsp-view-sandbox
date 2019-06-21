import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user/user.component";
import {UserIdComponent} from "./user/user-id/user-id.component";
import { UserAddComponent } from "src/app/user/user-add/user-add.component";
import { UserUpdateComponent } from 'src/app/user/user-update/user-update.component';
import { TeacherComponent } from 'src/app/teacher/teacher/teacher.component';
import { TeacherIdComponent} from 'src/app/teacher/teacher-id/teacher-id.component';
import { from } from 'rxjs';

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
  },
  {
    path:'create/user',
    component: UserAddComponent,
    data:{title: 'Novo Usuário'}
  },
  {
    path:'update/user/:id',
    component: UserUpdateComponent,
    data:{title: 'Editar Usuário'}
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    data: { title: 'Lista de professores' }
  },
  {
    path: 'teacher/:id',
    component: TeacherIdComponent,
    data:{title: 'Professor'} 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
