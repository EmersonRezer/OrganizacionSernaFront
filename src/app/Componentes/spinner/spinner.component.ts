import { Component } from '@angular/core';
import {SpinnerService} from "../../Servicios/spinner.service";

@Component({
  selector: 'app-spinner',
  template: `
    <div class="progress-spinner" *ngIf="isLoading$ | async">
      <div class="position-absolute top-50 start-50 translate-middle">
      <p-progressSpinner></p-progressSpinner>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  isLoading$ = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) {
  }

}
