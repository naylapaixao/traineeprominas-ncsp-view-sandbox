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
import { CourseAddComponent} from 'src/app/course/course-add/course-add.component';
import { CourseUpdateComponent} from 'src/app/course/course-update/course-update.component';
import { StudentComponent } from 'src/app/student/student/student.component';
import  { StudentIdComponent } from 'src/app/student/student-id/student-id.component';
import  { StudentAddComponent } from 'src/app/student/student-add/student-add.component';
import  { StudentUpdateComponent } from 'src/app/student/student-update/student-update.component';
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
  },
  {
    path:'create/course',
    component: CourseAddComponent,
    data:{title: 'Novo Curso'}
  },
  {
    path:'update/course/:id',
    component: CourseUpdateComponent,
    data:{title: 'Editar Curso'}
  },
  {
    path: 'student',
    component: StudentComponent,
    data: { title: 'Lista de estudantes' }
  },
  {
    path: 'student/:id',
    component: StudentIdComponent,
    data:{title: 'Aluno'} 
  },
  {
    path: 'create/student',
    component: StudentAddComponent,
    data:{title: 'Novo Aluno'} 
  },
  {
    path:'update/student/:id',
    component: StudentUpdateComponent,
    data:{title: 'Editar Aluno'}
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
