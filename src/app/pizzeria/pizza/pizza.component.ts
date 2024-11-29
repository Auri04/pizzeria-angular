import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})

export class PizzaComponent {
  // @Input ({required:true}) pizze!: any;

  // @Output() selectedPizza=new EventEmitter();

  // selectPizza(){
  //   this.selectedPizza.emit();
  // }
}
