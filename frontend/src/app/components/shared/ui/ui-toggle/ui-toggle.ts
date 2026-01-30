import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-toggle',
  imports: [],
  templateUrl: './ui-toggle.html',
  styleUrl: './ui-toggle.css',
})
export class UiToggle {

  @Input() value: boolean = false;

  toggle() {
    this.value = !this.value;
  }
}
