import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-component',
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {

  @Input() quantQuestions: number = 1;
  @Output() delete = new EventEmitter<void>();

}
