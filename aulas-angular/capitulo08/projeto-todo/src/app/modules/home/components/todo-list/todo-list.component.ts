import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Primeira tarefa", checked: true },
    { task: "Segunda tarefa", checked: false },
    { task: "Terceira tarefa", checked: true },
    { task: "Quarta tarefa", checked: true },
    { task: "Quinta tarefa", checked: false },
  ];

  constructor(){}

  ngOnInit(): void {
  }
}
