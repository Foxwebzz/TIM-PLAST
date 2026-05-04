import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-dvokrilni-alu',
  standalone: true,
  imports: [PricingTableComponent],
  template: ` <app-pricing-table [title]="title" [category]="category" [rows]="rows" /> `,
})
export class DvokrilniAluComponent {
  readonly title = 'B) DVOKRILNI ALU PROZORI';
  readonly category = 'dvokrilni-alu';
  readonly rows: PriceRow[] = [
    { dimensions: '100x100', withoutInstallation: 360, withInstallation: 390 },
    { dimensions: '100x120', withoutInstallation: 380, withInstallation: 410 },
    { dimensions: '100x140', withoutInstallation: 420, withInstallation: 450 },
    { dimensions: '100x160', withoutInstallation: 450, withInstallation: 480 },
    { dimensions: '120x120', withoutInstallation: 420, withInstallation: 450 },
    { dimensions: '120x140', withoutInstallation: 450, withInstallation: 480 },
    { dimensions: '120x160', withoutInstallation: 490, withInstallation: 520 },
    { dimensions: '140x120', withoutInstallation: 460, withInstallation: 490 },
    { dimensions: '140x140', withoutInstallation: 500, withInstallation: 530 },
    { dimensions: '140x160', withoutInstallation: 540, withInstallation: 570 },
    { dimensions: '160x120', withoutInstallation: 540, withInstallation: 570 },
    { dimensions: '160x140', withoutInstallation: 570, withInstallation: 600 },
    { dimensions: '160x160', withoutInstallation: 620, withInstallation: 650 },
    { dimensions: '160x180', withoutInstallation: 680, withInstallation: 710 },
    { dimensions: '180x180', withoutInstallation: 750, withInstallation: 780 },
  ];
}
