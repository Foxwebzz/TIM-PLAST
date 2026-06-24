import { Component } from '@angular/core';
import { AreaCalculatorComponent } from '../../components/area-calculator/area-calculator.component';

@Component({
  selector: 'app-komarnici-roletne-page',
  standalone: true,
  imports: [AreaCalculatorComponent],
  template: ` <app-area-calculator /> `,
})
export class KomarniciRoletnePageComponent {}
