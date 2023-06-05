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

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }
  
  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja deletar todas as tarefas ?");
    
    if(confirm){
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false });
  }
}
