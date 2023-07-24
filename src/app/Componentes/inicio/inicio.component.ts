import {Component} from '@angular/core';
import {environment} from "../../../../config/environment";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  muestra = environment.variableMuestra;

}
