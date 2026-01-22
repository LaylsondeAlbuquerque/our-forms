import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionType } from '../../../../models/question.model';


@Component({
  selector: 'app-ui-select',
  standalone: true,
  imports: [],
  templateUrl: './ui-select.html',
  styleUrl: './ui-select.css',
})
export class UiSelect {

  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  @Input() options: string[] = [];


  isOpen:boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectType(option: string) {
    this.valueChange.emit(option);
    this.isOpen = false;
  }
}
