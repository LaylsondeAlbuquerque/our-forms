import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {

  @Output() addQuestion = new EventEmitter<void>();

  onClickAddQuestion() {
    this.addQuestion.emit();
  }


}
