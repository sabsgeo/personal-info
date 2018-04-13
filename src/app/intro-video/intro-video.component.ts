import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.css']
})
export class IntroVideoComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // console.log('d')
    // this.dataservice.changeProgressState(2);
  }

}
