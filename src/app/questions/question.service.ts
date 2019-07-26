import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Validators } from '@angular/forms';
import { CheckboxQuestion } from './question-checkbox';

@Injectable({ providedIn: 'root' })
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'asdf', value: '123' },
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'Primer Nombre',
        value: '',
        required: true,
        order: 1
      }),
      // new TextboxQuestion({
      //   key: 'surname',
      //   label: 'Primer Apellido',
      //   value: '',
      //   required: true,
      //   order: 1
      // }),
      new CheckboxQuestion({
        key: 'work',
        label: 'Trabaja?',
        value: '',
        order: 5
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        validators: [Validators.email]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
