import {Component, input} from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-demo.component.html',
  styleUrl: './life-cycle-demo.component.css'
})
export class LifeCycleDemoComponent {

  data = input<number>();

  constructor(){
    console.log("LifeCycle DemoComponent created");
  }
  ngOnInit() {
    console.log("Run Once.");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }
}
