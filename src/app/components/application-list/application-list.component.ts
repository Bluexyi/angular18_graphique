import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDataService } from '../../services/application-data/application-data.service';
import { ApplicationDetailComponent } from '../application-detail/application-detail.component';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [CommonModule, ApplicationDetailComponent],
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications: any[] = [];
  openedApplications: Set<number> = new Set<number>();

  constructor(private applicationDataService: ApplicationDataService) { }

  ngOnInit(): void {
    this.applicationDataService.getApplicationData().subscribe(data => {
      this.applications = data;
    });
  }

  toggleApplication(index: number): void {
    if (this.openedApplications.has(index)) {
      this.openedApplications.delete(index);
    } else {
      this.openedApplications.add(index);
    }
  }

  isOpened(index: number): boolean {
    return this.openedApplications.has(index);
  }
}
