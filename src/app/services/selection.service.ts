import { Injectable, computed, signal } from '@angular/core';

export interface SelectedItem {
  category: string;
  dimensions: string;
  withoutInstallation: number;
  withInstallation: number;
  quantity: number;
}

export type SelectionInput = Omit<SelectedItem, 'quantity'>;

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private readonly items = signal<Map<string, SelectedItem>>(new Map());

  readonly selected = computed(() => Array.from(this.items().values()));

  readonly totalWithoutInstallation = computed(() =>
    this.selected().reduce((sum, i) => sum + i.withoutInstallation * i.quantity, 0),
  );

  readonly totalWithInstallation = computed(() =>
    this.selected().reduce((sum, i) => sum + i.withInstallation * i.quantity, 0),
  );

  readonly totalItemCount = computed(() =>
    this.selected().reduce((sum, i) => sum + i.quantity, 0),
  );

  isSelected(category: string, dimensions: string): boolean {
    return this.items().has(this.key(category, dimensions));
  }

  getQuantity(category: string, dimensions: string): number {
    return this.items().get(this.key(category, dimensions))?.quantity ?? 0;
  }

  toggle(item: SelectionInput): void {
    const k = this.key(item.category, item.dimensions);
    const next = new Map(this.items());
    if (next.has(k)) {
      next.delete(k);
    } else {
      next.set(k, { ...item, quantity: 1 });
    }
    this.items.set(next);
  }

  increment(item: SelectionInput): void {
    const k = this.key(item.category, item.dimensions);
    const next = new Map(this.items());
    const existing = next.get(k);
    if (existing) {
      next.set(k, { ...existing, quantity: existing.quantity + 1 });
    } else {
      next.set(k, { ...item, quantity: 1 });
    }
    this.items.set(next);
  }

  decrement(item: SelectionInput): void {
    const k = this.key(item.category, item.dimensions);
    const existing = this.items().get(k);
    if (!existing) return;
    const next = new Map(this.items());
    if (existing.quantity <= 1) {
      next.delete(k);
    } else {
      next.set(k, { ...existing, quantity: existing.quantity - 1 });
    }
    this.items.set(next);
  }

  clear(): void {
    this.items.set(new Map());
  }

  private key(category: string, dimensions: string): string {
    return `${category}::${dimensions}`;
  }
}
