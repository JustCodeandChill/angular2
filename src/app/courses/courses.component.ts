import { Component } from "@angular/core";

@Component({
  selector: 'courses', 
  template: `<h2>{{"title" + getTItle()}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of component";
  courses = ["1", "2", "3"]

  getTItle() {
    return this.title;
  }
}