import { Component } from '@angular/core';
import { ApplicationListComponent } from './components/application-list/application-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApplicationListComponent],
  template: `<app-application-list></app-application-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpa-application-center';
}
