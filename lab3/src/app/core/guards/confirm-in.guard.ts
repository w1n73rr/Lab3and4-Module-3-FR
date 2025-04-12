import { ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";

export const confirmInGuard  = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) =>{
    return confirm('Вы уверены, что хотите перейти?');
}