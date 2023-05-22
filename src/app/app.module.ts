import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReviewMyAnswersComponent } from './review-my-answers/review-my-answers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    ReviewMyAnswersComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
