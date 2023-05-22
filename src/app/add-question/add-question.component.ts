import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuestionService } from './../../core/services/question.service';
import { Question } from 'src/core/data/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private router: Router ) {}

  ngOnInit() {
    this.resetForm()
  }

  get answerOptions() {
    return this.questionForm.get('answerOptions') as FormArray;
  }

  addAnswerOption() {
    const answerOption = this.formBuilder.group({
      answer: ['', Validators.required]
    });
    this.answerOptions.push(answerOption);
  }

  removeAnswerOption(index: number) {
    this.answerOptions.removeAt(index);
  }

  onSubmit() {
    this.questionService.addQuestion(new Question({
      question:  this.questionForm.get('question')?.value || '',
      answerFormat: this.questionForm.get('answerFormat')?.value || '',
      answerOptions: (this.questionForm.get('answerOptions')?.value || []).map((val:any) => val.answer),
      allowOwnAnswer: !!this.questionForm.get('allowOwnAnswer')?.value,
      answerRequire: !!this.questionForm.get('requireAnswer')?.value,
    }))
    this.resetForm()
    this.router.navigate(['/builder']);


  }
  resetForm(){
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      answerFormat: ['paragraph', Validators.required],
      answerOptions: this.formBuilder.array([]),
      requireAnswer: [true],
      allowOwnAnswer: [true],
    });
  }
}
