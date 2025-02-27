import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AutherizationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const router = inject(Router)
    const localData = localStorage.getItem('userType')
    if (!localData || localData === 'user') {
        alert('You are not autherize to perform this task')
        router.navigateByUrl('/')
        return false
    }
    else {
        return true;
    }
}
