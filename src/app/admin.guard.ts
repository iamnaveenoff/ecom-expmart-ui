import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./services/AuthService.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isUserAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home']); // Redirect non-admin users
      return false;
    }
  }
}
