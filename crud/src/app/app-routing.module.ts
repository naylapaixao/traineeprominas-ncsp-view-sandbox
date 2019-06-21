import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user/user.component";
import {UserIdComponent} from "./user/user-id/user-id.component";
import { UserAddComponent } from "src/app/user/user-add/user-add.component";
import { UserUpdateComponent } from 'src/app/user/user-update/user-update.component';
import { TeacherComponent } from 'src/app/teacher/teacher/teacher.component';
import { TeacherIdComponent} from 'src/app/teacher/teacher-id/teacher-id.component';
import { TeacherAddComponent } from 'src/app/teacher/teacher-add/teacher-add.component';
import { TeacherUpdateComponent} from 'src/app/teacher/teacher-update/teacher-update.component';
import { CourseComponent } from 'src/app/course/course/course.component';
import { CourseIdComponent} from 'src/app/course/course-id/course-id.component';
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
  },
  {
    path:'create/teacher',
    component: TeacherAddComponent,
    data:{title: 'Novo Usuário'}
  },
  {
    path:'update/teacher/:id',
    component: TeacherUpdateComponent,
    data:{title: 'Editar Professor'}
  },
  {
    path:'course',
    component: CourseComponent,
    data:{title: 'Lista de Cursos'}
  },
  {
    path:'course/:id',
    component: CourseIdComponent,
    data:{title: 'Curso'}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
