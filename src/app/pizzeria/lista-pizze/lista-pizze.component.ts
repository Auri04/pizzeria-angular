import { Component,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {

  @Input ({required:true}) pizze!: any;

  @Output() selectPizza=new EventEmitter<number>(); //obbligo l'event mitter a passarmi un number

  onSelectPizza(id: number){
    this.selectPizza.emit(id);
  }

  @Input ({required:true}) pizzeObj!: any;
}
