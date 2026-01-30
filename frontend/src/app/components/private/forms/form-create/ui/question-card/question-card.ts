import { Component, Input } from '@angular/core';
import { Question, QuestionType } from '../../../../../../models/question.model';

import { UiSelect } from '../../../../../shared/ui/ui-select/ui-select';
import { UiToggle } from '../../../../../shared/ui/ui-toggle/ui-toggle';
import { DeleteComponent } from '../../../../../shared/ui/delete.component/delete.component';

@Component({
  selector: 'app-question-card',
  imports: [UiSelect, UiToggle, DeleteComponent],
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
