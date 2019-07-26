import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({ providedIn: 'root' })
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      console.log('toFormGroup', question.validators);
      group[question.key] = question.required ? new FormControl(question.value || '', [Validators.required, ...question.validators])
        : new FormControl(question.value || '', [...question.validators]);
    });
    return new FormGroup(group);
  }
}
