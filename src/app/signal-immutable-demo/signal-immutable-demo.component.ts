import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signal-immutable-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-immutable-demo.component.html',
  styleUrl: './signal-immutable-demo.component.css'
})
export class SignalImmutableDemoComponent {
  list = signal([10, 20, 30, 40]);
  listSize = computed(()=>this.list().length);

  constructor() {
    effect(() => {
      console.log("List Size ", this.list.length);
    });
  }

  addItem(){
    // this.list.push(100); //error
    this.list.set([...this.list(), 100]);
  }
}
