import { Component } from '@angular/core';
import { JednokrilniAluComponent } from '../../components/jednokrilni-alu/jednokrilni-alu.component';
import { DvokrilniAluComponent } from '../../components/dvokrilni-alu/dvokrilni-alu.component';
import { JednokrilnaAluVrataComponent } from '../../components/jednokrilna-alu-vrata/jednokrilna-alu-vrata.component';
import { DvokrilnaAluVrataComponent } from '../../components/dvokrilna-alu-vrata/dvokrilna-alu-vrata.component';

@Component({
  selector: 'app-alu-page',
  standalone: true,
  imports: [
    JednokrilniAluComponent,
    DvokrilniAluComponent,
    JednokrilnaAluVrataComponent,
    DvokrilnaAluVrataComponent,
  ],
  template: `
    <h1 class="page__heading">1. CENE ALU PROZORA</h1>
    <app-jednokrilni-alu />
    <app-dvokrilni-alu />

    <h1 class="page__heading">2. CENE ALU BALKONSKIH VRATA</h1>
    <p class="page__intro">
      ALU balkonska vrata sa termo-prekidom. Idealna za izlaz na terase i zimske bašte.
    </p>
    <app-jednokrilna-alu-vrata />
    <app-dvokrilna-alu-vrata />
  `,
  styles: `
    .page__heading {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 2.5rem 0 0.75rem;
      letter-spacing: 0.02em;
    }
    .page__intro {
      margin: 0 0 1rem;
      color: #4b5563;
      line-height: 1.5;
    }
  `,
})
export class AluPageComponent {}
