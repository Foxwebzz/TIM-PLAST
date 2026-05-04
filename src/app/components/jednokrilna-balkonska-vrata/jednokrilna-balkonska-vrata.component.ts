import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-jednokrilna-balkonska-vrata',
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
export class JednokrilnaBalkonskaVrataComponent {
  readonly title = 'A) JEDNOKRILNA BALKONSKA VRATA';
  readonly category = 'jednokrilna-balkonska-vrata';
  readonly rows: PriceRow[] = [
    { dimensions: '70x205', withoutInstallation: 225, withInstallation: 250 },
    { dimensions: '80x205', withoutInstallation: 230, withInstallation: 255 },
    { dimensions: '90x205', withoutInstallation: 235, withInstallation: 260 },
    { dimensions: '100x205', withoutInstallation: 240, withInstallation: 265 },
    { dimensions: '80x220', withoutInstallation: 245, withInstallation: 270 },
    { dimensions: '90x220', withoutInstallation: 255, withInstallation: 280 },
    { dimensions: '100x220', withoutInstallation: 265, withInstallation: 290 },
  ];
}
