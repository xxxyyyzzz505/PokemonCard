import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinalpageGuard implements CanActivate {
  constructor(private dataAPI: DataService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.dataAPI.finalSelectedPokemon) {
        return true;
      } else {
        this.router.navigate(['']);
        // return false;
      }
  }
  
}
