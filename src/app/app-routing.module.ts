import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReviewMyAnswersComponent } from './review-my-answers/review-my-answers.component';
import {BuilderComponent} from "./builder/builder.component";

const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'review-answers', component: ReviewMyAnswersComponent },
  { path: 'builder', component: BuilderComponent },
  // Add other routes if needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
