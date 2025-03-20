import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AttributeComponent } from './attribute/attribute.component';

@Component({
  selector: 'app-root',
  imports: [AttributeComponent],
  template: `
   <app-attribute />
  `,
})
export class App {

}

bootstrapApplication(App);
