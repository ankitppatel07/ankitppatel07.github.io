import { Component, ViewEncapsulation } from '@angular/core';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';

@Component({
  selector: 'app-old-home',
  templateUrl: './old-home.component.html',
  styleUrl: './old-home.component.scss',
  imports: [LeftSideComponent, RightSideComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class OldHomeComponent {
  title = 'portfolio-website';
}
