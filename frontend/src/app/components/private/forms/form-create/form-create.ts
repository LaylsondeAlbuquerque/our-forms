import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Question, QuestionType } from '../../../../models/question.model';
import { UiSelect } from '../../../shared/features/ui-select/ui-select';
import { FormBuilderService } from '../../../../services/form-builder.service';

@Component({
  selector: 'app-form-create',
  imports: [CommonModule, DragDropModule, UiSelect],
  templateUrl: './form-create.html',
  styleUrl: './form-create.css',
})
export class FormCreate {

  protected formService = inject(FormBuilderService);

  questionTypes: QuestionType[] = [
      'short-text', 
      'long-text', 
      'multiple-choice', 
      'checkboxes', 
      'dropdown', 
      'date', 
      'file-upload'
    ]

  questions = this.formService.questions;

  addQuestion() {
    this.formService.addQuestion();
  }
 

}
