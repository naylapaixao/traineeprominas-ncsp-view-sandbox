import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent implements OnInit {

  student: Student = { id: null, name: '', lastName: '',  age: null, course: null};
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id) {
    this.api.getStudent(id)
      .subscribe(data => {
        this.student = data;
        console.log(this.student);
        this.isLoadingResults = false;
      });
  }

  deletestudent(id) {
    this.isLoadingResults = true;
    this.api.deleteStudent(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/estudante']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
