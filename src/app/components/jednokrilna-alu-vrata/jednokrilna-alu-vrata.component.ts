import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-jednokrilna-alu-vrata',
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
export class JednokrilnaAluVrataComponent {
  readonly title = 'A) JEDNOKRILNA BALKONSKA VRATA';
  readonly category = 'jednokrilna-alu-vrata';
  readonly rows: PriceRow[] = [
    { dimensions: '70x205', withoutInstallation: 410, withInstallation: 440 },
    { dimensions: '80x205', withoutInstallation: 450, withInstallation: 480 },
    { dimensions: '90x205', withoutInstallation: 490, withInstallation: 525 },
    { dimensions: '100x205', withoutInstallation: 530, withInstallation: 570 },
    { dimensions: '80x220', withoutInstallation: 470, withInstallation: 500 },
    { dimensions: '90x220', withoutInstallation: 505, withInstallation: 540 },
    { dimensions: '100x220', withoutInstallation: 540, withInstallation: 580 },
  ];
}
