import {Component, effect, signal, untracked} from '@angular/core';

@Component({
  selector: 'app-signal-untrack',
  standalone: true,
  imports: [],
  templateUrl: './signal-untrack.component.html',
  styleUrl: './signal-untrack.component.css'
})
export class SignalUntrackComponent {
  itemOne = signal(1);
  itemTwo = signal(2);

  constructor() {
    effect((onCleanup) => {
      console.log("ItemOne ", this.itemOne(), " ItemTwo ", untracked(this.itemTwo));
      onCleanup(()=>{
        console.log("On cleanup function");
      })
    });
  }

  incOne(){
    this.itemOne.update(old => old+2);
  }

  incTwo(){
    this.itemTwo.update(old=>old+3);
  }

}
