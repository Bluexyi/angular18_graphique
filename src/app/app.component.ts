import { Component } from '@angular/core';
import { ComponentListComponent } from './components/component-list/component-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentListComponent],
  template: `<app-component-list></app-component-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpa-deployment-center';
}
