import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Question, QuestionType } from '../../../../models/question.model';
import { UiSelect } from '../../../shared/features/ui-select/ui-select';

@Component({
  selector: 'app-form-create',
  imports: [CommonModule, DragDropModule, UiSelect],
  templateUrl: './form-create.html',
  styleUrl: './form-create.css',
})
export class FormCreate {

  questionTypes: QuestionType[] = [
      'short-text', 
      'long-text', 
      'multiple-choice', 
      'checkboxes', 
      'dropdown', 
      'date', 
      'file-upload'
    ]

  questions = signal<Question[]>([
    {id: '1', title: '', type: 'short-text', Required: false},
  ])



}
