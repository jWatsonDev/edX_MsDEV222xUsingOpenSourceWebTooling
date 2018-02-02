import { Component } from '@angular/core';

@Component({
  selector: 'Com-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'LAB ASSIGNMENT';
}
