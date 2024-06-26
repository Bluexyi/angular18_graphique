import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-component-detail',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  @Input() component: any;

  private COLORS = ['blue', 'orange', 'green', 'red', 'purple', 'yellow'];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Installations par mois'
      },
      legend: {
        position: 'bottom' // Position de la légende en dessous
      }
    },
  };
  public barChartLabels!: string[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData!: any[];

  public pieChartOptionsIncidents: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Incidents en cours par composant'
      },
      legend: {
        position: 'bottom' // Position de la légende en dessous
      }
    }
  };
  public pieChartOptionsTickets: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'État des tickets'
      },
      legend: {
        position: 'bottom' // Position de la légende en dessous
      }
    }
  };

  public pieChartLabelsIncidents: string[] = ['Composant A', 'Composant B'];
  public pieChartLabelsTickets: string[] = ['Fini', 'En attente', 'En cours'];
  public pieChartDataIncidents!: any[];
  public pieChartDataTickets!: any[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  ngOnInit(): void {
    this.barChartLabels = this.component.barData.labels;
    this.barChartData = this.component.barData.data.map((dataset: any, index: number) => ({
      ...dataset,
      backgroundColor: this.COLORS[index % this.COLORS.length]
    }));

    this.pieChartDataIncidents = [
      {
        data: this.component.pieDataIncidents,
        backgroundColor: this.COLORS.slice(0, this.component.pieDataIncidents.length), // Couleurs personnalisées
        label: 'Incidents en cours'
      }
    ];

    this.pieChartDataTickets = [
      {
        data: this.component.pieDataTickets,
        backgroundColor: this.COLORS.slice(0, this.component.pieDataTickets.length), // Couleurs personnalisées
        label: 'État des tickets'
      }
    ];
  }
}
