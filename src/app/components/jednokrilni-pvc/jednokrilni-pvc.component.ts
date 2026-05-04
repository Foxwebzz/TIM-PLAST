import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-jednokrilni-pvc',
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
export class JednokrilniPvcComponent {
  readonly title = 'A) JEDNOKRILNI PVC PROZORI';
  readonly category = 'jednokrilni-pvc';
  readonly rows: PriceRow[] = [
    { dimensions: '50x50', withoutInstallation: 63, withInstallation: 77 },
    { dimensions: '60x60', withoutInstallation: 63, withInstallation: 80 },
    { dimensions: '60x80', withoutInstallation: 85, withInstallation: 100 },
    { dimensions: '80x80', withoutInstallation: 95, withInstallation: 110 },
    { dimensions: '80x100', withoutInstallation: 105, withInstallation: 120 },
    { dimensions: '80x120', withoutInstallation: 125, withInstallation: 145 },
    { dimensions: '80x140', withoutInstallation: 140, withInstallation: 165 },
    { dimensions: '80x160', withoutInstallation: 160, withInstallation: 180 },
    { dimensions: '100x100', withoutInstallation: 125, withInstallation: 145 },
    { dimensions: '100x120', withoutInstallation: 145, withInstallation: 165 },
    { dimensions: '100x140', withoutInstallation: 160, withInstallation: 185 },
    { dimensions: '100x160', withoutInstallation: 190, withInstallation: 210 },
    { dimensions: '120x120', withoutInstallation: 185, withInstallation: 205 },
    { dimensions: '120x140', withoutInstallation: 210, withInstallation: 230 },
    { dimensions: '140x140', withoutInstallation: 215, withInstallation: 240 },
  ];
}
