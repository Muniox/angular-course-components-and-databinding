import { Component } from '@angular/core';

export interface ServerElement {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [{type: 'server', name: 'Test', content: 'Just a test!'}];
}
