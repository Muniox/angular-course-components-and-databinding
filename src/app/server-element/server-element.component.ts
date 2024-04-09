import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServerElement } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent {
  @Input({ required: true, alias: 'srvElement' }) element: ServerElement;
}
