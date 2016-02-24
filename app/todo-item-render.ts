/**
 * Created by Zurie on 2/24/16.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    //encapsulation: ViewEncapsulation.None,
    selector: 'todo-item-render',
    template: `
    <style>
    .completed {
    text-decoration: line-through;
    }
    </style>
    <div>
        <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="toggle.emit(todo)">Toggle</button>
        </div>`
})

export class TodoItemRender {
    @Input() todo;
    @Output() toggle = new EventEmitter();
};
