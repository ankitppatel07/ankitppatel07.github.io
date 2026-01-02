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

  // New state to control the visibility of the confirmation modal
  private showConfirmSource = new BehaviorSubject<boolean>(false);
  showConfirm$ = this.showConfirmSource.asObservable();

  private router = inject(Router);

  toggleTimeTravel() {
    if (this.warpStateSource.value === 'warping') return;

    // Determine target based on current route
    const currentRoute = this.router.url;
    // const targetRoute = currentRoute.includes('old-home') ? '/' : '/old-home';

    // this.warpStateSource.next('warping');

    // Peak of the 1.5s animation is roughly at 700-800ms
    // if (targetRoute) {
    //   setTimeout(() => {
    //     this.router.navigate([targetRoute]);
    //   }, 750);
    // }
    // Check if we are going from new-home to old-home
    if (currentRoute.includes('old-home')) {
      this.executeWarp(''); // Go back to new-home immediately

    } else {
      this.showConfirmSource.next(true); // Open the modal instead of warping
    }
  }

  confirmTravel() {
    this.showConfirmSource.next(false);
    this.executeWarp('/old-home');
  }

  cancelTravel() {
    this.showConfirmSource.next(false);
  }

  private executeWarp(targetRoute: string) {
    this.warpStateSource.next('warping');
    setTimeout(() => {
      this.router.navigate([targetRoute]);
    }, 750);
  }

  resetWarp() {
    this.warpStateSource.next('idle');
  }
}
