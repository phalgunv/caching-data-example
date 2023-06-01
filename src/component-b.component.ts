import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerFacadeService } from './customer-facade.service';

@Component({
  selector: 'app-component-b',
  template: `
  <div *ngIf="customerFacade.cart$ | async as data">Cart data in component A:
    {{ data | json }}
  </div>
  `,
  styles: [`
  :host {
    border: 2px solid dimgray;
    display: block;
    padding: 20px;
  }`],
  standalone: true,
  imports: [CommonModule],
})
export class ComponentBComponent implements OnInit {
  constructor(protected customerFacade: CustomerFacadeService) {}

  ngOnInit() {}
}
