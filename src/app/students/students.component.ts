import { Component, OnInit } from '@angular/core';
import { Student, StudentClass } from '../../types/student';
import { WhichType } from '../student/student.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:StudentClass[]=[];

  constructor() { }

  ngOnInit() {
    console.log("Students");
    this.students[0]=new StudentClass("Ala","Makota",123485);
    this.students[1]=new StudentClass("Jan","Kowlaski",2345);
    this.students.push(new StudentClass("Adrian","Duda",156789));
  }


  doEdit(editedStudent:WhichType){
    console.log(editedStudent);
    this.students[editedStudent.which]=editedStudent.student;
    //call edit method on server
  }
  
  add($event){
    if($event.firstName && $event.lastName && typeof $event.indexNumber!='undefined' && $event.indexNumber){
      this.students.push(new StudentClass($event.firstName,$event.lastName,$event.indexNumber));
  }
  }
  remove(student : StudentClass){
    this.students = this.students.filter(e=>e!== student)
  }

}
