import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/model/course';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teachers', 'action'];
  dataSource: MatTableDataSource<Course>;
  
  isLoadingResults: boolean;
  constructor(private router: Router, private api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {

    this.api.getCourses()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Course>(res);
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });

  }

}
