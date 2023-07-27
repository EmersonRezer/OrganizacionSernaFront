import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./Componentes/navbar/navbar.component";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {NosotrosComponent} from "./Componentes/nosotros/nosotros.component";
import {NegocioComponent} from "./Componentes/negocio/negocio.component";
import {BienestarComponent} from "./Componentes/bienestar/bienestar.component";
import {ContactanosComponent} from "./Componentes/contactanos/contactanos.component";

const rutas: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: "full"},
      {path: 'inicio', component: InicioComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'negocio', component: NegocioComponent},
      {path: 'bienestar', component: BienestarComponent},
      {path: 'contactanos', component: ContactanosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
