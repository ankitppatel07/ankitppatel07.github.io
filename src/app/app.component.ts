import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarpService } from './_shared/services/warp.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
export class AppComponent {
  // title = 'portfolio-website';
  protected readonly title = signal('portfolio-website');
  public warpService = inject(WarpService);

  onWarpEnd() {
    this.warpService.resetWarp();
  }

}
