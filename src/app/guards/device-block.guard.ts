import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeviceBlockGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    const isMobileOrTablet = /android|iphone|ipad|mobile|tablet/i.test(userAgent);

    if (isMobileOrTablet) {
      // Redirect to a proper route
      return this.router.parseUrl('/not-supported');
    }

    return true; // Allow desktop users
  }
}
