import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-create',
  imports: [CommonModule, DragDropModule],
  templateUrl: './form-create.html',
  styleUrl: './form-create.css',
})
export class FormCreate {

  perguntas = [
    { titulo: 'Qual seu nome?', tipo: 'Texto Curto' },
    { titulo: 'Qual sua idade?', tipo: 'Número' },
    { titulo: 'Gosta de Angular?', tipo: 'Múltipla Escolha' }
  ];

  soltar(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.perguntas, event.previousIndex, event.currentIndex);
  }
}
