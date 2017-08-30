import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `
})
export class AppComponent {
  title = 'Tour of heroes';
  hero: Hero = {
    id: 1,
    name: 'Tormenta'
  };
}

export class Hero {
  id: number;
  name: string;
}
