import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Answer} from "../../core/data/answer.model";
import {QuestionService} from "../../core/services/question.service";
import {AnswerService} from "../../core/services/answer.service";
import {Router} from "@angular/router";
import toAnswer from "../../core/utils/option-local";

@Component({
  selector: 'app-review-my-answers',
  templateUrl: './review-my-answers.component.html',
  styleUrls: ['./review-my-answers.component.css']
})
export class ReviewMyAnswersComponent implements OnInit {
  public answers: Answer[] = [];
  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private answerService: AnswerService,
              private router: Router) {}
  ngOnInit() {
    // Retrieve the questions from localStorage if they exist
    const storedQuestions = this.answerService.getAnswer();
    if (storedQuestions) {
      this.answers = storedQuestions;
    } else {
      // Initialize the questions array with sample data if not found in localStorage
      this.answers = [];
    }
  }
  goToAddQuestion(){
    this.router.navigate(['/add-question']);
  }
  saveAnswer(){
    this.answerService.saveAnswers(this.answers);
  }
}
