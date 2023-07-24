import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./Componentes/navbar/navbar.component";
import {InicioComponent} from "./Componentes/inicio/inicio.component";

const rutas: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: "full"},
      {path: 'inicio', component: InicioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
