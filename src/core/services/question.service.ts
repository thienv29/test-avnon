import {Injectable} from '@angular/core';
import { Question } from '../data/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public getQuestions(): Question[]{
    return JSON.parse(localStorage.getItem('questions') || '') || [];
  }
  public addQuestion(question: Question){
    const quests = JSON.parse(localStorage.getItem('questions') || '[]') || [];
    quests.push(question)
    localStorage.setItem('questions', JSON.stringify(quests));
    return question;
  }


}
