import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: false
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(value: string): void {
    if (value == "BU") {
      window.open("https://www.binghamton.edu");
    } else if (value == "MU") {
      window.open("https://mu.ac.in/");
    }
  }

}
