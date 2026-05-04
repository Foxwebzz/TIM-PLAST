import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-roletne',
  standalone: true,
  imports: [PricingTableComponent],
  template: `
    <app-pricing-table
      [title]="title"
      [category]="category"
      [rows]="rows"
      firstColumnLabel="TIP ROLETNE"
    />
  `,
})
export class RoletneComponent {
  readonly title = '1. ROLETNE - CENE';
  readonly category = 'roletne';
  readonly rows: PriceRow[] = [
    {
      dimensions: 'Spoljna ALU kutija - ALU zastor',
      withoutInstallation: 70,
      withInstallation: 75,
    },
    {
      dimensions: 'Unutrašnja termo ALU kutija - ALU zastor',
      withoutInstallation: 70,
      withInstallation: 75,
    },
    {
      dimensions: 'Unutrašnja PVC kutija - ALU zastor',
      withoutInstallation: 65,
      withInstallation: 70,
    },
  ];
}
