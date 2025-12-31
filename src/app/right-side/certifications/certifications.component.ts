import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.css'],
    standalone: false
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(value: string): void {
    if(value == "oracle_cert") {
      window.open("https://www.youracclaim.com/badges/3f63cf0e-e8f0-4847-978d-23d9d8125002/linked_in_profile");
    } else if("aws_cert") {
      window.open("https://cp.certmetrics.com/amazon/en/public/verify/credential/0CM3X3MBFFQ1QJSZ");
    }
  }

}
