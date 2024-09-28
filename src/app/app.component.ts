import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navbar for login and signup pages
        this.showNavbar = !(event.url === '/login' || event.url === '/signup' || event.urlAfterRedirects.startsWith('/admin'));
      }
    });
  }
}
