import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blinked';
  template: any = 'ocean';
  data: any = 'sample data';
  frame:any={
    style: 'F_022',
    height: 200,
    width: 200,
    x: 60,
    y: 60
  };
}
