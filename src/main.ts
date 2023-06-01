import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerFacadeService } from './customer-facade.service';
import { provideHttpClient } from '@angular/common/http';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ComponentAComponent, ComponentBComponent],
  template: `
    <app-component-a/>
    <app-component-b/>
    <button (click)="customerFacade.cacheBust()">Update</button>
  `,
})
export class App {
  name = 'Angular';
  constructor(public customerFacade: CustomerFacadeService) {

  }
}

bootstrapApplication(App,{
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
