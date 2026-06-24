import { Component } from '@angular/core';
import { PricingTableComponent } from '../pricing-table/pricing-table.component';
import { DVOKRILNI_PVC_CATEGORY, DVOKRILNI_PVC_ROWS } from '../../data/pvc-windows.data';

@Component({
  selector: 'app-dvokrilni-pvc',
  standalone: true,
  imports: [PricingTableComponent],
  template: ` <app-pricing-table [title]="title" [category]="category" [rows]="rows" /> `,
})
export class DvokrilniPvcComponent {
  readonly title = 'B) DVOKRILNI PVC PROZORI';
  readonly category = DVOKRILNI_PVC_CATEGORY;
  readonly rows = DVOKRILNI_PVC_ROWS;
}
