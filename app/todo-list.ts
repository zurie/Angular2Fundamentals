/**
 * Created by Zurie on 2/23/16.
 */
import {Component,Input} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoItemRender} from "./todo-item-render";
import {StartedPipe} from "./started-pipe";

@Component ({
    selector: 'todo-list',
    pipes: [StartedPipe],
    directives: [TodoItemRender],
    template: `<div>
     <ul>
        <li *ngFor="#todo of todoService.todos | started : status">
            <todo-item-render
            [todo]="todo"
            (toggle)="todoService.toggleTodo($event)"
            ></todo-item-render>
        </li>
    </ul>
     </div>`
})

export class TodoList {
    @Input() status;
    constructor(public todoService:TodoService){}
}
