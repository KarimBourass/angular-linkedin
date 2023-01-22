import { Component, Input } from '@angular/core';

@Component({
  selector: 'connection-level',
  template: `
  <span class="text-neutral-500 text-sm" *ngIf="level > 0">
  <container-element [ngSwitch]="level">
    <span *ngSwitchCase="1"> • 1st</span>
    <span *ngSwitchCase="2"> • 2nd</span>
    <span *ngSwitchCase="3"> • 3rd</span>
  </container-element>
  </span>
`,
})
export class ConnectionLevelComponent {


  // Connection lelvel :
  // - 0 : not_connected
  // - 1 : connected
  // - 2 : 2nd
  // - 3 : 3nd
  @Input() level!: number



}
