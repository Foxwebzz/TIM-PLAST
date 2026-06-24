import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SelectionService } from '../../services/selection.service';

interface AreaProduct {
  category: string;
  label: string;
  pricePerM2: number;
}

const MONTAZA_PO_KOMADU = 40;

@Component({
  selector: 'app-area-calculator',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './area-calculator.component.html',
  styleUrl: './area-calculator.component.scss',
})
export class AreaCalculatorComponent {
  private readonly selection = inject(SelectionService);

  protected readonly products: AreaProduct[] = [
    { category: 'alu-komarnici', label: 'Alu komarnik', pricePerM2: 45 },
    { category: 'alu-roletne', label: 'Alu roletna', pricePerM2: 60 },
  ];

  protected readonly width = signal<number | null>(null);
  protected readonly height = signal<number | null>(null);
  protected readonly productIndex = signal(0);
  protected readonly searched = signal(false);

  protected readonly product = computed(() => this.products[this.productIndex()]);

  protected readonly area = computed<number>(() => {
    const w = this.width();
    const h = this.height();
    if (!w || !h || w <= 0 || h <= 0) return 0;
    return (w / 100) * (h / 100);
  });

  protected readonly result = computed(() => {
    const area = this.area();
    if (area <= 0) return null;
    const withoutInstallation = Math.round(area * this.product().pricePerM2);
    return {
      dimensions: `${this.width()}x${this.height()}`,
      withoutInstallation,
      withInstallation: withoutInstallation + MONTAZA_PO_KOMADU,
    };
  });

  protected readonly quantity = computed<number>(() => {
    const r = this.result();
    if (!r) return 0;
    return this.selection.getQuantity(this.product().category, r.dimensions);
  });

  protected setWidth(value: string): void {
    this.width.set(value ? Number(value) : null);
  }

  protected setHeight(value: string): void {
    this.height.set(value ? Number(value) : null);
  }

  protected setProduct(index: number): void {
    this.productIndex.set(index);
  }

  protected search(): void {
    this.searched.set(true);
  }

  protected addToTotal(): void {
    const r = this.result();
    if (!r) return;
    this.selection.increment({ category: this.product().category, ...r });
  }
}
