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

  protected formBuilderService = inject(FormBuilderService);

  questions = this.formBuilderService.questions;

  drop(event: CdkDragDrop<string[]>) {
    this.formBuilderService.moveQuestion(event.previousIndex, event.currentIndex);
  }
 

}
