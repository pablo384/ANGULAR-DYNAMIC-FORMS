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
}
