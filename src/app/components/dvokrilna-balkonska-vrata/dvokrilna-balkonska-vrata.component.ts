import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-dvokrilna-balkonska-vrata',
  standalone: true,
  imports: [PricingTableComponent],
  template: `
    <app-pricing-table
      [title]="title"
      [category]="category"
      [rows]="rows"
    />
  `,
})
export class DvokrilnaBalkonskaVrataComponent {
  readonly title = 'B) DVOKRILNA BALKONSKA VRATA';
  readonly category = 'dvokrilna-balkonska-vrata';
  readonly rows: PriceRow[] = [
    { dimensions: '120x205', withoutInstallation: 320, withInstallation: 350 },
    { dimensions: '140x205', withoutInstallation: 340, withInstallation: 370 },
    { dimensions: '160x205', withoutInstallation: 365, withInstallation: 405 },
    { dimensions: '180x205', withoutInstallation: 390, withInstallation: 430 },
    { dimensions: '140x220', withoutInstallation: 360, withInstallation: 395 },
    { dimensions: '160x220', withoutInstallation: 390, withInstallation: 430 },
    { dimensions: '180x220', withoutInstallation: 415, withInstallation: 455 },
  ];
}
