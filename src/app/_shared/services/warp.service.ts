import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WarpService {
  // Use a BehaviorSubject to track the current state
  private warpStateSource = new BehaviorSubject<string>('idle');
  warpState$ = this.warpStateSource.asObservable();

  private router = inject(Router);

  triggerWarp() {
    if (this.warpStateSource.value === 'warping') return;

    // Determine target based on current route
    const currentRoute = this.router.url;
    const targetRoute = currentRoute.includes('old-home') ? '/' : '/old-home';

    this.warpStateSource.next('warping');

    // Peak of the 1.5s animation is roughly at 700-800ms
    if (targetRoute) {
      setTimeout(() => {
        this.router.navigate([targetRoute]);
      }, 750);
    }
  }

  resetWarp() {
    this.warpStateSource.next('idle');
  }
}
