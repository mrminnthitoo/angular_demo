import {Component, HostListener, signal} from '@angular/core';

@Component({
  selector: 'app-host-element-demo',
  standalone: true,
  imports: [],
  templateUrl: './host-element-demo.component.html',
  styleUrl: './host-element-demo.component.css',
  host:{
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)'
  }
})
export class HostElementDemoComponent {
  value:number = 0;
  disabled:boolean = false;
  isActive = signal(false);
  updateValue(event: KeyboardEvent) {}

  @HostListener('click', ['$event'])
  mouseClick(event: MouseEvent) {
    console.log("Mouse Click ", event)
  }
}
