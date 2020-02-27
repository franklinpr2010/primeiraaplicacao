import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  tasks = [];
  task = "";


  /**
   * Metodo para adicionar na lista
   */
  add():void {
      this.tasks.push(this.tasks)
  }



}
