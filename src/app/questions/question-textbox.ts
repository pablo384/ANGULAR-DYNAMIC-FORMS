import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {show: true}) {
    super(options);
    this.type = options['type'] || '';
  }
}
