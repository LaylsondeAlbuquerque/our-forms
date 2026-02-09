import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-option-item',
  imports: [FormsModule],
  templateUrl: './option-item.html',
  styleUrl: './option-item.css',
})
export class OptionItem {

  @Input() quantOptions: number = 1;

  @Input() questionType: string = '';

  @Input() option: string = '';
  @Output() optionChange = new EventEmitter<string>();

  @Output() remove = new EventEmitter<void>();

  emitirMudanca(novoValor: string) {
    this.option = novoValor;
    this.optionChange.emit(this.option);
  }

  emitirRemocao() {
    this.remove.emit();
  }

  @Input() index: number = 0;

}
