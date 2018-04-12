import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedState = 1;

  constructor(private dataservice: DataService) {
    this.dataservice.progressStateMessage.subscribe(message => setTimeout(() => this.selectedState = message));
  }
}
