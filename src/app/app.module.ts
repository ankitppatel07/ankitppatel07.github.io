import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSideComponent } from './old-ui/left-side/left-side.component';
import { RightSideComponent } from './old-ui/right-side/right-side.component';
import { SkillsComponent } from './old-ui/right-side/skills/skills.component';
import { ExperienceComponent } from './old-ui/right-side/experience/experience.component';
import { CertificationsComponent } from './old-ui/right-side/certifications/certifications.component';
import { EducationComponent } from './old-ui/left-side/education/education.component';
import { SocialComponent } from './old-ui/left-side/social/social.component';
import { FooterComponent } from './old-ui/shared/footer/footer.component';
import { OldHomeComponent } from './old-ui/old-home.component';

@NgModule({
  declarations: [
    AppComponent,
    OldHomeComponent,
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
