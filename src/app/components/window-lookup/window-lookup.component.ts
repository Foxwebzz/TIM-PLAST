import { Component, computed, inject, signal } from '@angular/core';
import { SelectionService } from '../../services/selection.service';
import { PriceRow } from '../pricing-table/pricing-table.component';
import {
  DVOKRILNI_PVC_CATEGORY,
  DVOKRILNI_PVC_ROWS,
  JEDNOKRILNI_PVC_CATEGORY,
  JEDNOKRILNI_PVC_ROWS,
} from '../../data/pvc-windows.data';

type WindowType = typeof JEDNOKRILNI_PVC_CATEGORY | typeof DVOKRILNI_PVC_CATEGORY;

@Component({
  selector: 'app-window-lookup',
  standalone: true,
  imports: [],
  templateUrl: './window-lookup.component.html',
  styleUrl: './window-lookup.component.scss',
})
export class WindowLookupComponent {
  private readonly selection = inject(SelectionService);

  protected readonly width = signal<number | null>(null);
  protected readonly height = signal<number | null>(null);
  protected readonly type = signal<WindowType>(JEDNOKRILNI_PVC_CATEGORY);
  protected readonly searched = signal(false);

  protected readonly typeKeys: WindowType[] = [JEDNOKRILNI_PVC_CATEGORY, DVOKRILNI_PVC_CATEGORY];

  protected readonly typeLabels: Record<WindowType, string> = {
    [JEDNOKRILNI_PVC_CATEGORY]: 'Jednokrilni',
    [DVOKRILNI_PVC_CATEGORY]: 'Dvokrilni',
  };

  private readonly datasets: Record<WindowType, PriceRow[]> = {
    [JEDNOKRILNI_PVC_CATEGORY]: JEDNOKRILNI_PVC_ROWS,
    [DVOKRILNI_PVC_CATEGORY]: DVOKRILNI_PVC_ROWS,
  };

  protected readonly result = computed<PriceRow | null>(() => {
    const w = this.width();
    const h = this.height();
    if (!w || !h) return null;
    const keys = [`${w}x${h}`, `${h}x${w}`];
    return this.datasets[this.type()].find((r) => keys.includes(r.dimensions)) ?? null;
  });

  protected readonly quantity = computed<number>(() => {
    const row = this.result();
    if (!row) return 0;
    return this.selection.getQuantity(this.type(), row.dimensions);
  });

  protected setWidth(value: string): void {
    this.width.set(value ? Number(value) : null);
  }

  protected setHeight(value: string): void {
    this.height.set(value ? Number(value) : null);
  }

  protected setType(type: WindowType): void {
    this.type.set(type);
  }

  protected search(): void {
    this.searched.set(true);
  }

  protected addToTotal(): void {
    const row = this.result();
    if (!row) return;
    this.selection.increment({ category: this.type(), ...row });
  }
}
