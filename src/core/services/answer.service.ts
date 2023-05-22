import {Injectable} from '@angular/core';
import { Question } from '../data/question.model';
import {Answer} from "../data/answer.model";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  public getAnswer(): Answer[]{
    return JSON.parse(localStorage.getItem('answers') || '') || [];
  }
  public saveAnswers(answers: Answer[]){
    localStorage.setItem('answers', JSON.stringify(answers));
    return answers;
  }


}
