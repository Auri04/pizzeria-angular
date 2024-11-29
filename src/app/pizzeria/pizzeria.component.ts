import { Component } from '@angular/core';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DUMMY_PIZZA } from './dummy-pizza';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css',
})
export class PizzeriaComponent {
  pizze = DUMMY_PIZZA;

  pizzaSelezionata!: any;

  onSelectPizza(id: number) {
    console.log('Stai selezionando la pizza' + id);

    this.pizzaSelezionata = this.pizze.filter((pizza) => id === pizza.id);
    console.log(this.pizzaSelezionata);
    console.log(typeof this.pizzaSelezionata);

    this.pizzaSelezionata = this.pizzaSelezionata.pop();
  }
}
