import { Injectable, signal } from '@angular/core';
import { Question } from '../../../../../models/question.model';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {

  // Simulando um ID auto-incrementável para as perguntas -- futuramente será gerado pelo backend
  id: number = 1;
  
  // Utilizando signal para gerenciar o estado das perguntas de forma reativa
  #questions = signal<Question[]>([
    {id: '1', title: '', type: 'texto curto', required: false, options: [ '' ], data: ''},
  ])

  // Expondo as perguntas como uma propriedade somente leitura para evitar modificações diretas
  public questions = this.#questions.asReadonly();

  // PERGUNTAS

  // Método para adicionar novas perguntas, incrementando o ID e atualizando a lista de perguntas
  addQuestion() {
    this.id++;

   const newQuestion: Question = {
    id: this.id.toString(),
    title: '',
    type: 'texto curto',
    required: false,
    options: [''],
    data: '',
   }

   this.#questions.update(questions => [...questions, newQuestion]);
  }

  // Método para remover uma pergunta específica
  removeQuestion(questionId: string) {
    this.#questions.update(questions =>
       questions.filter( q => q.id !== questionId)
    )
  }

  // OPÇÕES

  // Método para adicionar uma nova opção a uma pergunta que seja múltipla escolha
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

  // Método para remover uma opção específica de uma pergunta
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

  // MÉTODOS DE REORDENAÇÃO

  // Método para reordenar as perguntas
  moveQuestion(previousIndex: number, currentIndex: number) {
    this.#questions.update(listaAtual => {
      const novaLista = [...listaAtual];

      moveItemInArray(novaLista, previousIndex, currentIndex);

      return novaLista;
    });
  }

  // Método para reordenar as opções dentro de uma pergunta
  moveOption(questionId: string, previousIndex: number, currentIndex: number) {
    this.#questions.update(questions => 
      questions.map( q => {
        if ( q.id === questionId && q.options) {
          const novaLista = [...q.options];

          moveItemInArray(novaLista, previousIndex, currentIndex);

          return { ...q, options: novaLista };
        }

        return q;

      })
    );
  }

}
