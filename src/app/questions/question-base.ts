import { Validators } from '@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  type?: string;
  options?: Array<any>;
  required: boolean;
  show: boolean;
  order: number;
  controlType: string;
  validators: Array<any>;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    show?: boolean,
    order?: number,
    controlType?: string,
    validators?: Array<any>,
  } = {
    show : true
  }) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.show = options.show ? true : false;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || [];
    console.log('padre::', this.validators);
    console.log('opt::', options);
    console.log('val::', options.validators);
  }
}
