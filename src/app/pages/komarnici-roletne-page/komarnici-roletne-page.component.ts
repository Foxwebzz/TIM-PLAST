import { Component } from '@angular/core';
import { RoletneComponent } from '../../components/roletne/roletne.component';
import { KomarniciComponent } from '../../components/komarnici/komarnici.component';

@Component({
  selector: 'app-komarnici-roletne-page',
  standalone: true,
  imports: [RoletneComponent, KomarniciComponent],
  template: `
    <app-roletne />
    <app-komarnici />
  `,
})
export class KomarniciRoletnePageComponent {}
