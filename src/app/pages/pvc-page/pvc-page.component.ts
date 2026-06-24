import { Component } from '@angular/core';
import { JednokrilniPvcComponent } from '../../components/jednokrilni-pvc/jednokrilni-pvc.component';
import { DvokrilniPvcComponent } from '../../components/dvokrilni-pvc/dvokrilni-pvc.component';
import { WindowLookupComponent } from '../../components/window-lookup/window-lookup.component';

@Component({
  selector: 'app-pvc-page',
  standalone: true,
  imports: [JednokrilniPvcComponent, DvokrilniPvcComponent, WindowLookupComponent],
  template: `
    <app-window-lookup />

    <h1 class="page__heading">1. CENE PVC PROZORA</h1>
    <app-jednokrilni-pvc />
    <app-dvokrilni-pvc />
  `,
  styles: `
    .page__heading {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 2.5rem 0 0.75rem;
      letter-spacing: 0.02em;
    }
  `,
})
export class PvcPageComponent {}
