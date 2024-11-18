import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categorie } from '../Models/categorie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() category!: Categorie;
 
}
