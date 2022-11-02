import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentClass } from 'types/student';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  @Input() studentForDelete:StudentClass;
  @Output() emitRemove= new EventEmitter<StudentClass>();


  constructor() { }

  ngOnInit(): void {
  }
  
  remove(studentForDelete: StudentClass){
    this.emitRemove.emit(studentForDelete);
  }
}
