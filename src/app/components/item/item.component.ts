import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoInterfaces } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'item',
  template: './item.component.html',
  get templateUrl() {
    return this._templateUrl;
  },
  set templateUrl(value) {
    this._templateUrl = value;
  },
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo: TodoInterfaces[];
  @Output() checkedItem = new EventEmitter();
  @Output() doubleClickedItem = new EventEmitter();
  // @Output() blurredItem = new EventEmitter();
  // @Output() enteredItem = new EventEmitter();
  @Output() cancelledItem = new EventEmitter();
  @Output() deletedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doneEdit(todo: TodoInterfaces): void {
    this.checkedItem.emit(todo);
  }

  editTodo(todo: TodoInterfaces): void {
    this.doubleClickedItem.emit(todo);
  }

  cancelEdit(todo: TodoInterfaces): void {
    this.cancelledItem.emit(todo);
  }

  deleteTodo(todo: TodoInterfaces): void {
    this.deletedItem.emit(todo);
  }

}
