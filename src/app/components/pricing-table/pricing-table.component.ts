import { Component, inject, input } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

export interface PriceRow {
  dimensions: string;
  withoutInstallation: number;
  withInstallation: number;
}

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [],
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.scss',
})
export class PricingTableComponent {
  readonly title = input.required<string>();
  readonly category = input.required<string>();
  readonly rows = input.required<PriceRow[]>();
  readonly description = input<string>('');
  readonly firstColumnLabel = input<string>('DIMENZIJE (CM)');

  private readonly selection = inject(SelectionService);

  isSelected(row: PriceRow): boolean {
    return this.selection.isSelected(this.category(), row.dimensions);
  }

  quantity(row: PriceRow): number {
    return this.selection.getQuantity(this.category(), row.dimensions);
  }

  toggle(row: PriceRow): void {
    this.selection.toggle({ category: this.category(), ...row });
  }

  increment(row: PriceRow): void {
    this.selection.increment({ category: this.category(), ...row });
  }

  decrement(row: PriceRow): void {
    this.selection.decrement({ category: this.category(), ...row });
  }
}
