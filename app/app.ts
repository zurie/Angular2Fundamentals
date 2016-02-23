import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TodoInput} from './Todo-Input';


@Component({
    selector: 'app',
    directives:[TodoInput],
    template: '<div><todo-input> </todo-input>  </div>'
})
export class AppComponent { }

bootstrap(AppComponent);