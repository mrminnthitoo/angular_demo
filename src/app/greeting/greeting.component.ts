import {Component, input} from '@angular/core';

function toUpper(value: string): string {
  console.log("to upper");
  return value?.toUpperCase() ?? "";
}

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  message = input('',{
    transform: toUpper
  });
}
