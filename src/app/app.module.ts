import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { SkillsComponent } from './right-side/skills/skills.component';
import { ExperienceComponent } from './right-side/experience/experience.component';
import { CertificationsComponent } from './right-side/certifications/certifications.component';
import { EducationComponent } from './left-side/education/education.component';
import { SocialComponent } from './left-side/social/social.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    RightSideComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificationsComponent,
    EducationComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
