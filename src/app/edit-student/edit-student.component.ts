import { Component,EventEmitter, OnInit , Input, Output} from '@angular/core';
import {Student, StudentClass} from '../../types/student';
import { WhichType } from '../student/student.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() studentForPrint:StudentClass;
  @Input() isOdd:boolean;
  @Input() title:string;
  @Input() which:number;
  clicked: number=-1;
  studentForEdit:StudentClass=new StudentClass('','',0);
  @Output() doEditInParent: EventEmitter<WhichType>=new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }
  
  clickOnStudent(which:number):void{
    this.studentForEdit.Name=this.studentForPrint.Name;
    this.studentForEdit.Surname=this.studentForPrint.Surname;
    this.studentForEdit.Index_nr=this.studentForPrint.Index_nr;
    this.clicked=which;
  }

  hide():void{
    if(this.studentForEdit.Name.length>0){
      
      // this.studentForPrint.Name=this.studentForEdit.Name;
      // this.studentForPrint.Surname=this.studentForEdit.Surname;
      // this.studentForPrint.Index_nr=this.studentForEdit.Index_nr;
      let tempStudent:WhichType={student:this.studentForEdit,which:this.which};
      // tempStudent.student=this.studentForEdit;
      // tempStudent.which=this.clicked;
      console.log(tempStudent.student);
      this.doEditInParent.emit(tempStudent);
      this.clicked=-1;
      
    }
  }
}
