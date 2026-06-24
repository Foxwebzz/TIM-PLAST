import { Component } from '@angular/core';
import { PricingTableComponent } from '../pricing-table/pricing-table.component';
import { JEDNOKRILNI_PVC_CATEGORY, JEDNOKRILNI_PVC_ROWS } from '../../data/pvc-windows.data';

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
  readonly category = JEDNOKRILNI_PVC_CATEGORY;
  readonly rows = JEDNOKRILNI_PVC_ROWS;
}
