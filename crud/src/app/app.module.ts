import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { UserIdComponent } from './user/user-id/user-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { from } from 'rxjs';
import { UserAddComponent } from './user/user-add/user-add.component';
import { TeacherIdComponent } from './teacher/teacher-id/teacher-id.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CourseComponent } from './course/course/course.component';
import { CourseIdComponent } from './course/course-id/course-id.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TeacherComponent,
    UserIdComponent,
    MenuComponent,
    UserUpdateComponent,
    UserAddComponent,
    TeacherIdComponent,
    TeacherUpdateComponent,
    TeacherAddComponent,
    CourseComponent,
    CourseIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
