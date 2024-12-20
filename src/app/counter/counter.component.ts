import {Component, computed, effect, OnChanges, Signal, signal, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log("Effect function ", this.count())
    });
  }

  doubleCount : Signal<number> = computed(()=>this.count() * 2);

  ngOnChanges(changes: SimpleChanges) {
    console.log("component changed");
  }

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
