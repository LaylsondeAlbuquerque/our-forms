import { Injectable, signal } from '@angular/core';
import { Question } from '../../../../../models/question.model';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  
  id: number = 1;
  
  #questions = signal<Question[]>([
    {id: '1', title: '', type: 'texto curto', required: false, options: [ '' ]},
  ])

  public questions = this.#questions.asReadonly();

  addQuestion() {
    this.id++;

   const newQuestion: Question = {
    id: this.id.toString(),
    title: '',
    type: 'texto curto',
    required: false,
    options: [''],
   }

   this.#questions.update(questions => [...questions, newQuestion]);
  }

  removeQuestion(questionId: string) {
    this.#questions.update(questions =>
       questions.filter( q => q.id !== questionId)
    )
  }

  addOption(questionId: string) {
    
    this.#questions.update( questions => {
      return questions.map( q => { 
        if ( q.id === questionId) {
           return { ...q, options: [...(q.options || []), '']}
        }
        return q;
      })
    })
  }

  removeOption(questionId: string, optionIndex: number) {
    
    this.#questions.update(questions =>
      questions.map( q => {
        if (q.id === questionId && q.options) {
          return {
            ...q, options: q.options.filter((_, index) => index !== optionIndex )
          };
        }
        return q;
      })
    );

  }

  moveQuestion(previousIndex: number, currentIndex: number) {
    this.#questions.update(listaAtual => {
      const novaLista = [...listaAtual];

      moveItemInArray(novaLista, previousIndex, currentIndex);

      return novaLista;
    });
  }




}
