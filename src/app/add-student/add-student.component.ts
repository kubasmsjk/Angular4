import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  firstName: string;
  lastName: string;
  indexNumber: number;
  @Output()
  emitDane = new EventEmitter<{firstName:string,lastName:string,indexNumber:number}>();

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.emitDane.emit({firstName:this.firstName,lastName:this.lastName,indexNumber:this.indexNumber});
    this.firstName='';
    this.lastName='';
    this.indexNumber=null;
  }

}
