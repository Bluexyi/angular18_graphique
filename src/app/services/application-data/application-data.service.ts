import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {

  constructor() { }

  getApplicationData(): Observable<any[]> {
    // Données statiques simulant la réponse de l'API
    const data = [
      {
        id: 1,
        name: 'Application A',
        description: 'Description de l\'application A',
        barData: {
          labels: ['April', 'May', 'June'],
          data: [
            { data: [10, 20, 30], label: 'Composant A'},
            { data: [5, 15, 25], label: 'Composant B'}
          ]
        },
        pieDataIncidents: [5, 10], // Incidents en cours par composant
        pieDataTickets: [15, 7, 3] // État des tickets (fini, en attente, en cours)
      },
      {
        id: 2,
        name: 'Application B',
        description: 'Description de l\'application B',
        barData: {
          labels: ['April', 'May', 'June'],
          data: [
            { data: [10, 20, 30], label: 'Composant A'},
            { data: [5, 15, 25], label: 'Composant B'}
          ]
        },
        pieDataIncidents: [5, 10], // Incidents en cours par composant
        pieDataTickets: [15, 7, 3] // État des tickets (fini, en attente, en cours)
      }
    ];
    return of(data);
  }
}
