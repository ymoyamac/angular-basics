import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1 class="title">{{ title }}</h1>
    <h3>Base: <strong>{{ base }}</strong></h3>
    <button type="button" class="button" (click)="decrement(base)">Decrement -{{ base }}</button>
    <span class="text mg-x">{{ counter }}</span>
    <button type="button" class="button" (click)="increment(base)">Increment +{{ base }}</button>
  `,
  styleUrls: [ '../../app.component.scss' ],
})
export class CounterComponent {
  title: string = 'Counter App';
  counter: number = 0;
  base: number = 5;

  increment(incrementValue: number): void {
    this.counter += incrementValue;
  }

  decrement(decrementValue: number): void {
    this.counter -= decrementValue;
  }
}
