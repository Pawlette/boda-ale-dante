import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  image = '../assets/white-lisianthus.jpeg';
    constructor() {
      console.log(environment.production); // Logs false for default environment
    }
}
