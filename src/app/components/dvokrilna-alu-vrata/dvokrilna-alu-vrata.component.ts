import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-dvokrilna-alu-vrata',
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
export class DvokrilnaAluVrataComponent {
  readonly title = 'B) DVOKRILNA BALKONSKA VRATA';
  readonly category = 'dvokrilna-alu-vrata';
  readonly rows: PriceRow[] = [
    { dimensions: '120x205', withoutInstallation: 560, withInstallation: 590 },
    { dimensions: '140x205', withoutInstallation: 615, withInstallation: 650 },
    { dimensions: '160x205', withoutInstallation: 680, withInstallation: 720 },
    { dimensions: '180x205', withoutInstallation: 750, withInstallation: 790 },
    { dimensions: '140x220', withoutInstallation: 685, withInstallation: 720 },
    { dimensions: '160x220', withoutInstallation: 750, withInstallation: 790 },
    { dimensions: '180x220', withoutInstallation: 830, withInstallation: 870 },
  ];
}
