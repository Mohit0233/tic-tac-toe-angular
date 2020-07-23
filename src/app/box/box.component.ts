import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <button aria-label="Empty" [disabled]="dis" mat-icon-button color="accent" *ngIf="!value">{{ value }}</button>
    <button aria-label="Cross" [disabled]="dis" mat-icon-button color="primary" *ngIf="value == 'X'"><mat-icon inline class="icon">close</mat-icon></button>
    <button aria-label="Zero" [disabled]="dis" mat-icon-button color="accent" *ngIf="value == 'O'"><mat-icon inline class="icon">radio_button_unchecked</mat-icon></button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 10em !important; }'
  ]
})
export class BoxComponent{

  @Input() value: 'X' | 'O';
  @Input() dis: boolean;
}
