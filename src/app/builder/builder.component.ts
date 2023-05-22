import {Component, ViewChild} from '@angular/core';
import { Question } from 'src/core/data/question.model';
import {FormBuilder} from "@angular/forms";
import {QuestionService} from "../../core/services/question.service";
import {Answer} from "../../core/data/answer.model";
import toAnswer from "../../core/utils/option-local";
import {AddQuestionComponent} from "../add-question/add-question.component";
import {Router} from "@angular/router";
import {AnswerService} from "../../core/services/answer.service";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  public answers: Answer[] = [];
  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private answerService: AnswerService,
              private router: Router) {}
  ngOnInit() {
    // Retrieve the questions from localStorage if they exist
    const storedQuestions = this.questionService.getQuestions();
    console.log(storedQuestions)
    if (storedQuestions) {
      this.answers = storedQuestions.map(q => toAnswer(q));
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

  changeAnswerTx(answer: Answer, evt: any){
    const tmp = this.answers.find(an => an.question == answer.question);
    if (tmp){

    tmp.answer = evt.target.value;
    }
  }

  changeAnswerCh(answer: Answer,option: { answer: string, checked: boolean }, evt: any){
    const tmp = this.answers.find(an => an.question == answer.question);
    if (tmp){
      const optiontmp = tmp.answerOptions.find(an => an.answer == option.answer);
      if (optiontmp){
        optiontmp.checked = evt.target.value;
      }
    }
  }
}
