import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from 'src/model/user';
import { Teacher } from 'src/model/teacher';
import { Course } from 'src/model/course';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

import { apiUrl } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}JSON/user`)
      .pipe(
        tap(users => console.log('leu os usuários')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${apiUrl}JSON/user/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${apiUrl}user`, user, httpOptions).pipe(
      tap((user1: User) => console.log(`adicionou o usuário com w/ id=${user1.id}`)),
      catchError(this.handleError<User>('postUser'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = `${apiUrl}user/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${apiUrl}user/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${apiUrl}JSON/teacher`)
      .pipe(
        tap(teachers => console.log('leu os usuários')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${apiUrl}JSON/teacher/${id}`;
    return this.http.get<Teacher>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${apiUrl}Teacher/${id}`;
    return this.http.delete<Teacher>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${apiUrl}teacher`, teacher, httpOptions).pipe(
      tap((teacher1: Teacher) => console.log(`adicionou o usuário com w/ id=${teacher1.id}`)),
      catchError(this.handleError<Teacher>('postTeacher'))
    );
  }

  putTeacher(id, teacher): Observable<any> {
    const url = `${apiUrl}teacher/${id}`;
    return this.http.put(url, teacher, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateTeacher'))
    );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}course`)
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${apiUrl}JSON/course/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  deleteCourse(id): Observable<Course> {
    const url = `${apiUrl}Course/${id}`;
    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }



}
