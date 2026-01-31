import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-toggle',
  imports: [],
  templateUrl: './ui-toggle.html',
  styleUrl: './ui-toggle.css',
})
export class UiToggle {

  @Input() value: boolean = false;

  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
