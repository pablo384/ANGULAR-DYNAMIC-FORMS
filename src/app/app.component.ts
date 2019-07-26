import { Component } from '@angular/core';
import { QuestionService } from './questions/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebasForms';
  questions = [];

  constructor(private serv: QuestionService) {
    this.questions = serv.getQuestions();
  }
  peticion(arg) {
    console.log('PETICION====');
    console.log(arg);
    console.log('PETICION====');
  }
  cambiar() {
    // console.log(this.questions[2]);
    this.questions[2].show = !this.questions[2].show;
    // console.log(this.questions[2]);
  }
}
