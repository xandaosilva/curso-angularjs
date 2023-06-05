import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [
    { task: "Primeira tarefa", checked: true },
    { task: "Segunda tarefa", checked: false },
    { task: "Terceira tarefa", checked: true },
    { task: "Quarta tarefa", checked: true },
    { task: "Quinta tarefa", checked: false },
  ];

  constructor(){}

  ngDoCheck(): void {
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
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

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar ?");
      
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
}
