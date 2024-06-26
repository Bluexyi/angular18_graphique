import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDataService } from '../../services/component-data/component-data.service';
import { ComponentDetailComponent } from '../component-detail/component-detail.component';

@Component({
  selector: 'app-component-list',
  standalone: true,
  imports: [CommonModule, ComponentDetailComponent],
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  components: any[] = [];
  openedComponents: Set<number> = new Set<number>();

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit(): void {
    this.componentDataService.getComponentData().subscribe(data => {
      this.components = data;
    });
  }

  toggleComponent(index: number): void {
    if (this.openedComponents.has(index)) {
      this.openedComponents.delete(index);
    } else {
      this.openedComponents.add(index);
    }
  }

  isOpened(index: number): boolean {
    return this.openedComponents.has(index);
  }
}
