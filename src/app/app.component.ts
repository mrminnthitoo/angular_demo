import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ListItemComponent} from './list-item/list-item.component';
import {UserAccountComponent} from './user-account/user-account.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {GreetingComponent} from './greeting/greeting.component';
import {CustomSliderComponent} from './custom-slider/custom-slider.component';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HelloWorldComponent,
    ListItemComponent,
    UserAccountComponent,
    TodoListComponent,
    GreetingComponent,
    CustomSliderComponent,
    CounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_demo';
  message: string = "Greeting";
  slideValue = 100;

  valueOnChange(){
    console.log("Child value changed ", this.slideValue);
  }
}
