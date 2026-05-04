import { Component } from '@angular/core';
import { PriceRow, PricingTableComponent } from '../pricing-table/pricing-table.component';

@Component({
  selector: 'app-dvokrilni-pvc',
  standalone: true,
  imports: [PricingTableComponent],
  template: ` <app-pricing-table [title]="title" [category]="category" [rows]="rows" /> `,
})
export class DvokrilniPvcComponent {
  readonly title = 'B) DVOKRILNI PVC PROZORI';
  readonly category = 'dvokrilni-pvc';
  readonly rows: PriceRow[] = [
    { dimensions: '100x100', withoutInstallation: 195, withInstallation: 220 },
    { dimensions: '100x120', withoutInstallation: 210, withInstallation: 235 },
    { dimensions: '100x140', withoutInstallation: 225, withInstallation: 250 },
    { dimensions: '100x160', withoutInstallation: 235, withInstallation: 260 },
    { dimensions: '120x120', withoutInstallation: 225, withInstallation: 260 },
    { dimensions: '120x140', withoutInstallation: 235, withInstallation: 270 },
    { dimensions: '120x160', withoutInstallation: 270, withInstallation: 300 },
    { dimensions: '140x120', withoutInstallation: 235, withInstallation: 270 },
    { dimensions: '140x140', withoutInstallation: 255, withInstallation: 285 },
    { dimensions: '140x160', withoutInstallation: 290, withInstallation: 320 },
    { dimensions: '160x120', withoutInstallation: 270, withInstallation: 300 },
    { dimensions: '160x140', withoutInstallation: 290, withInstallation: 320 },
    { dimensions: '160x160', withoutInstallation: 320, withInstallation: 350 },
    { dimensions: '160x180', withoutInstallation: 365, withInstallation: 405 },
    { dimensions: '180x180', withoutInstallation: 380, withInstallation: 430 },
  ];
}
