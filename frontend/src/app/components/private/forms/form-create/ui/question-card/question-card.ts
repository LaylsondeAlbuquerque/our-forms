import { Component, Input } from '@angular/core';
import { Question, QuestionType } from '../../../../../../models/question.model';

import { UiSelect } from '../../../../../ui/ui-select/ui-select';

@Component({
  selector: 'app-question-card',
  imports: [UiSelect],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css',
})
export class QuestionCard {
  @Input() question!: Question;

  questionTypes: QuestionType[] = [
    'short-text',
    'long-text',
    'multiple-choice',
    'checkboxes',
    'dropdown',
    'date',
    'file-upload',
  ];
}
