import { Component, inject, signal } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  protected readonly selection = inject(SelectionService);
  protected readonly collapsed = signal(true);

  toggle(): void {
    this.collapsed.update((v) => !v);
  }
}
