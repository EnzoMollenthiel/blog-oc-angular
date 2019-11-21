import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesome app';

  constructor() { }

  onUp() {
    console.log('up'); 
  }

  onDown() {
    console.log('down');
  }
}

