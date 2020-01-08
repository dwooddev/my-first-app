import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)">
    <h2>{{"Title: " + title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
    </ul>
    <div (click)="onDivClicked()">
    <button (click) = "onSave($event)" class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'"[class.active]="isActive">Oh Yeah!</button>
    </div>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = true;
  onDivClicked(){
    console.log('Div was clicked!');
  }
  onSave($event){
    $event.stopPropagation();
    console.log('Rooday! Rooday!', $event);
  }
  onKeyUp(email){
    console.log('Email! ' + email);
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
