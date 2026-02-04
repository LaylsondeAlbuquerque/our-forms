import { Component, inject, Input } from '@angular/core';
import { Question, QuestionType } from '../../../../../../models/question.model';
import { FormBuilderService } from '../../../form-create/service/form-builder.service';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { UiSelect } from '../../../../../shared/ui/ui-select/ui-select';
import { UiToggle } from '../../../../../shared/ui/ui-toggle/ui-toggle';
import { DeleteComponent } from '../../../../../shared/ui/delete.component/delete.component';

import { OptionItem } from './ui/option-item/option-item';

@Component({
  selector: 'app-question-card',
  imports: [UiSelect, UiToggle, DeleteComponent, OptionItem, DragDropModule],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css',
})
export class QuestionCard {
  
  protected formBuilderService = inject(FormBuilderService);

  @Input() question!: Question;

  questionTypes: QuestionType[] = [
    'texto curto',
    'texto longo',
    'multipla escolha',
    'caixas de seleção',
    'data',
    'upload de arquivo',
  ];

  drop(event: CdkDragDrop<string[]>) {
    this.formBuilderService.moveOption(this.question.id, event.previousIndex, event.currentIndex);
  }
}
