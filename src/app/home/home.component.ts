import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { WarpService } from '../_shared/services/warp.service';
import { ScrollSpyDirective } from '../_shared/directives/scroll-spy.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ScrollSpyDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('warpTrigger', [
      transition('* => warping', [
        animate('1.5s ease-in-out', keyframes([
          style({ transform: 'scale(1)', filter: 'blur(0px) brightness(1)', offset: 0 }),
          style({ transform: 'scale(0.9)', filter: 'blur(2px) brightness(0.8)', offset: 0.3 }),
          style({ transform: 'scale(3)', filter: 'blur(20px) brightness(2)', opacity: 0.5, offset: 0.7 }),
          style({ transform: 'scale(1)', filter: 'blur(0px) brightness(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HomeComponent {
  activeSection: string = 'about';

  onSectionChange(sectionId: any) {
    this.activeSection = sectionId;
  }

  protected readonly title = signal('test-proj');

  public warpService = inject(WarpService);

  navLinks = [
    { name: 'About', url: '#about', id: 'about' },
    { name: 'Experience', url: '#experience', id: 'experience' },
    { name: 'Education', url: '#education', id: 'education' },
    { name: 'Certifications', url: '#certifications', id: 'certifications' },
    { name: 'Projects', url: '#projects', id: 'projects' }
  ];

  socials = [
    { title: 'GitHub', icon: 'bi-github', url: 'https://github.com/ankitppatel07' },
    { title: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/ankitppatel07/' }
  ];

  jobs = [
    {
      period: '2020 — Present',
      title: 'Senior Software Developer',
      company: 'TCSL - NYL',
      desc: 'I develop frontends for NYL-GBS applications and POCs that use Generative AI.',
      tech: ['Angular', 'TypeScript', 'Micro-frontends', 'SCSS', 'Jest']
    },
    {
      period: '2019 — 2020',
      title: 'UI Intern',
      company: 'Binghamton University, SUNY',
      desc: 'I conducted usability research, improved, and optimized the web applications developed by the CS Department.',
      tech: ['JavaScript', 'HTML', 'CSS', 'SQL']
    }
  ];

  educations = [
    {
      period: '2017 — 2019',
      univ: 'Binghamton University, SUNY',
      desc: 'Master of Science - Computer Science',
      url: 'http://binghamton.edu/',
      imageUrl: 'assets/bing.png'
    },
    {
      period: '2013 — 2017',
      univ: 'University of Mumbai, India',
      desc: 'Bachelor of Engineering - Information Technology',
      url: 'https://mum.digitaluniversity.ac/',
      imageUrl: 'assets/mumbai-univ.png'
    }
  ];

  projects = [
    {
      projUrl: 'https://release-forge-ui.vercel.app/',
      imageUrl: 'assets/release-forge-image.png',
      isLive: true,
      title: 'Release Forge: Enterprise Release Management System',
      desc: `Developed a comprehensive Release Management Dashboard designed to streamline the lifecycle of software
              deployments. The application handles
              complex, multi-layered data relationships including release headers, milestones, and scope tracking.
            <br>`,
      keyFeatures: `
                <li>
                  Dynamic Form Architecture: Utilized Angular Reactive Forms and FormArrays to manage
                  complex nested data entries (URLs, Milestones) with real-time validation.
                </li>
                <li>
                  Data Visualization: Integrated
                  Chart.js to provide operational insights via status distribution donuts and release-type pie charts.
                </li>
                <li>
                  Cloud
                  Native Deployment: Orchestrated a distributed architecture using Vercel for the UI, Render for the
                  API,
                  and Neon (Serverless PostgreSQL) for the database.
                </li>
                <li>
                  Advanced UX: Implemented custom Breadcrumb services,
                  Material Design dialogs, and Route Guards to prevent data loss during unsaved edits.
                </li>
              `,
      tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'SCSS']
    },
    {
      projUrl: 'https://github.com/ankitppatel07/news-app',
      imageUrl: 'assets/news-app-logo.png',
      isLive: false,
      title: 'News Application',
      desc: 'Developed a web application to view news articles, and current weather information and submit feedback on articles. Implemented Admin user features that include adding, editing news articles, and adding new users.',
      keyFeatures: `
        <li>
          Add, Edit or Remove articles
        </li>
        <li>
          Add, Edit or Remove users
        </li>
      `,
      tech: ['JavaScript', 'HTML', 'CSS', 'SQL']
    }
  ];

  openPage(url: string | undefined): void {
    window.open(url, '_blank');
  }

  warpState = 'idle';

  onWarpEnd(): void {
    this.warpService.resetWarp();
  }

  currentTheme = "dark";

  switchTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light': 'dark'
    console.log("Current Theme: ", this.currentTheme)
    localStorage.setItem('theme', this.currentTheme);
    this.setTheme();
  }

  setTheme() {
    document.body.setAttribute(
      'data-theme',
      this.currentTheme
    );
  }

  constructor() {
    this.currentTheme = localStorage.getItem('theme') ?? 'dark'
    this.setTheme();
  }

}
