import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Student, StudentClass} from '../../types/student';

export type WhichType={
  student:StudentClass,
  which:number
}
@Component({
  selector: 'print-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() isOdd:boolean;
  @Input() studentForPrint:StudentClass;
  @Input() title:string;
  
  constructor() {
    
   }

  ngOnInit() {
    
  }
}