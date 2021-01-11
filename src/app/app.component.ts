import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Main Code';

  data:any;

  sideTitle: string = '';

  constructor( private as: AppService ) {

    this.as.someEmit.subscribe (
      
      data => this.data = data
    )
  }

  ngOnInit() {
    
    setTimeout(() => {

      this.title = "Updated"

    }, 5000)
  }

  clickEventFromMain(e) {

    console.log(e)

    this.sideTitle = e;
  }
}
