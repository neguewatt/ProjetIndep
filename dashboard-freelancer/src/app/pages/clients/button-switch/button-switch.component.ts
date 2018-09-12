import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-button-switch',
  styleUrls: ['./button-switch.component.scss'],
  template: `
    <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>
      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="text">{{ text }}</div>
      </div>
    </nb-card>
  `,
})
export class ButtonSwitchComponent {
	
  @Input() title: string;
  @Input() type: string;
  @Input() text: string;
  @Input() on = false;
}
/*<div class="status">{{ on ? 'ON' : 'OFF' }}</div>*/