import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-komarnici',
  standalone: true,
  imports: [PricingTableComponent],
  template: `
    <app-pricing-table
      [title]="title"
      [category]="category"
      [rows]="rows"
      firstColumnLabel="TIP KOMARNIKA"
    />
  `,
})
export class KomarniciComponent {
  readonly title = '2. KOMARNICI - CENE';
  readonly category = 'komarnici';
  readonly rows: PriceRow[] = [
    { dimensions: 'Plise komarnici (za vrata)', withoutInstallation: 27, withInstallation: 45 },
    {
      dimensions: 'Fiksni komarnici (za prozore)',
      withoutInstallation: 15,
      withInstallation: 20,
    },
  ];
}
