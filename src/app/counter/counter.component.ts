import {Component, computed, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal(0);

  doubleCount : Signal<number> = computed(()=>this.count() * 2);

  inc(){
    this.count.update(oldValue => oldValue + 10);
  }
  dec(){
    this.count.update(oldValue => oldValue - 10);
  }
  reset(){
    this.count.set(0);
  }
}
