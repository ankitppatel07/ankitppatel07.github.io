import { Component, OnInit } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
  imports: [EducationComponent, SocialComponent]
})
export class LeftSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
