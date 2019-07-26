import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './questions/dynamic-form-question.component';
import { DynamicFormComponent } from './questions/dynamic-form.component';
import { QuestionService } from './questions/question.service';
import { QuestionControlService } from './questions/question-control.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MDBBootstrapModule],
  providers: [QuestionService, QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
