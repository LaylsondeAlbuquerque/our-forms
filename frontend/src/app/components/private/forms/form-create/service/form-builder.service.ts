import { Injectable, signal } from '@angular/core';
import { Question, QuestionType } from '../../../../../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  
  id: number = 1;
  
  questions = signal<Question[]>([
    {id: '1', title: '', type: 'short-text', required: false},
  ])

  addQuestion() {
    this.id++;

   const newQuestion: Question = {
    id: this.id.toString(),
    title: '',
    type: 'short-text',
    required: false
   }

   this.questions.update(questions => [...questions, newQuestion]);
  }
}
