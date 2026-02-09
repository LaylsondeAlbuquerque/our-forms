import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { FormBuilderService } from './service/form-builder.service';

import { QuestionCard } from './ui/question-card/question-card';
import { Toolbar } from './ui/toolbar/toolbar';

@Component({
  selector: 'app-form-create',
  imports: [CommonModule, DragDropModule, QuestionCard, Toolbar],
  templateUrl: './form-create.html',
  styleUrl: './form-create.css',
})
export class FormCreate {

  // Injetando o serviço de construção de formulário para gerenciar o estado das perguntas e opções
  protected formBuilderService = inject(FormBuilderService);

  // Acessando as perguntas do serviço para exibição e manipulação no template
  questions = this.formBuilderService.questions;

  // Método para lidar com o evento de arrastar e soltar, delegando a lógica de reordenação ao serviço
  drop(event: CdkDragDrop<string[]>) {
    this.formBuilderService.moveQuestion(event.previousIndex, event.currentIndex);
  }
 

}
