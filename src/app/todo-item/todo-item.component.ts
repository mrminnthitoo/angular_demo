import {Component, computed, input, output} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{
  todo = input<Todo>();
  todoDelete = output<Todo>();
  // title = computed(() => `${this.todo()?.title}`);

  deleteTodo(){
    console.log("Delete Todo, ", this.todo());
    this.todoDelete.emit(this.todo()!);
  }

}
