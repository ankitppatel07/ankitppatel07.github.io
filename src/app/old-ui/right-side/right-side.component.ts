import { Component, OnInit } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
  imports: [ExperienceComponent, SkillsComponent, CertificationsComponent]
})
export class RightSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
