import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css'],
    standalone: false
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(value: string): void {
    if(value == "github") {
      window.open("https://github.com/ankitppatel07");
    } else if("linkedin") {
      window.open("https://www.linkedin.com/in/ankitppatel07/");
    }
  }

}
