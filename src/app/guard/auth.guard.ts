import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router = inject(Router)
  const localData = localStorage.getItem('token')
  if (!localData) {
    alert('Please Login to Continue')
    router.navigateByUrl('login')
    return false
  }
  else {
    return true;
  }
}
