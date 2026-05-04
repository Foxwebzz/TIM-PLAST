import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-jednokrilni-alu',
  standalone: true,
  imports: [PricingTableComponent],
  template: `
    <app-pricing-table
      [title]="title"
      [description]="description"
      [category]="category"
      [rows]="rows"
    />
  `,
})
export class JednokrilniAluComponent {
  readonly title = 'A) JEDNOKRILNI ALU PROZORI';
  readonly description =
    'ALU prozori sa termo-prekidom pružaju odličnu izolaciju. Cena počinje od 145€ bez ugradnje.';
  readonly category = 'jednokrilni-alu';
  readonly rows: PriceRow[] = [
    { dimensions: '50x50', withoutInstallation: 145, withInstallation: 165 },
    { dimensions: '60x60', withoutInstallation: 160, withInstallation: 180 },
    { dimensions: '60x80', withoutInstallation: 190, withInstallation: 220 },
    { dimensions: '80x80', withoutInstallation: 220, withInstallation: 250 },
    { dimensions: '80x100', withoutInstallation: 250, withInstallation: 280 },
    { dimensions: '80x120', withoutInstallation: 275, withInstallation: 305 },
    { dimensions: '80x140', withoutInstallation: 305, withInstallation: 335 },
    { dimensions: '80x160', withoutInstallation: 360, withInstallation: 390 },
    { dimensions: '100x100', withoutInstallation: 275, withInstallation: 305 },
    { dimensions: '100x120', withoutInstallation: 305, withInstallation: 335 },
    { dimensions: '100x140', withoutInstallation: 360, withInstallation: 390 },
    { dimensions: '100x160', withoutInstallation: 410, withInstallation: 440 },
    { dimensions: '120x120', withoutInstallation: 360, withInstallation: 390 },
    { dimensions: '120x140', withoutInstallation: 410, withInstallation: 440 },
    { dimensions: '140x140', withoutInstallation: 435, withInstallation: 465 },
  ];
}
