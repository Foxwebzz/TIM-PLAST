import { Component } from '@angular/core';
import { JednokrilniPvcComponent } from '../../components/jednokrilni-pvc/jednokrilni-pvc.component';
import { DvokrilniPvcComponent } from '../../components/dvokrilni-pvc/dvokrilni-pvc.component';
import { JednokrilnaBalkonskaVrataComponent } from '../../components/jednokrilna-balkonska-vrata/jednokrilna-balkonska-vrata.component';
import { DvokrilnaBalkonskaVrataComponent } from '../../components/dvokrilna-balkonska-vrata/dvokrilna-balkonska-vrata.component';

@Component({
  selector: 'app-pvc-page',
  standalone: true,
  imports: [
    JednokrilniPvcComponent,
    DvokrilniPvcComponent,
    JednokrilnaBalkonskaVrataComponent,
    DvokrilnaBalkonskaVrataComponent,
  ],
  template: `
    <h1 class="page__heading">1. CENE PVC PROZORA</h1>
    <app-jednokrilni-pvc />
    <app-dvokrilni-pvc />

    <h1 class="page__heading">2. CENE PVC BALKONSKIH VRATA</h1>
    <app-jednokrilna-balkonska-vrata />
    <app-dvokrilna-balkonska-vrata />
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
