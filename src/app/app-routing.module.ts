import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./Componentes/navbar/navbar.component";

const rutas: Routes = [
  {path: '', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
