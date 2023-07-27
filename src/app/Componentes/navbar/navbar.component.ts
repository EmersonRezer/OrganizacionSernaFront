import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  inicio = false;
  nosotros = false;
  negocio = false;
  bienestar = false;
  contactanos = false;
  largo!: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Ruta actual:', event.url);
        this.detectarRuta();
      }
    });
    this.largo = window.innerWidth > 992;
  }

  @HostListener('window:resize')

  onResize() {
    this.largo = window.innerWidth > 991;
  }

  detectarRuta(){
    this.inicio = false;
    this.nosotros = false;
    this.negocio = false;
    this.bienestar = false;
    this.contactanos = false;
    const rutaActual = this.router.url;
    switch (rutaActual) {
      case '/inicio':
        this.inicio = true;
        break;
      case '/nosotros':
        this.nosotros = true;
        break;
      case '/bienestar':
        this.bienestar = true;
        break;
      case '/contactanos':
        this.contactanos = true;
        break;
      case '/negocio':
        this.negocio = true;
        break;
    }
  }

  goTo(url: string){
    this.router.navigateByUrl(url);
  }

}
