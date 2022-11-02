import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { PrintTitleDirective } from './print-title.directive';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,StudentsComponent, StudentComponent, PrintTitleDirective, EditStudentComponent, AddStudentComponent, DeleteStudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
