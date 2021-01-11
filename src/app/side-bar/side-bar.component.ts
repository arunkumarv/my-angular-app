import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent  {

  @Input('side-title') myTitle;

  constructor( public appservice: AppService ) { 

    console.log ('hi from sidebar')

    console.log ( this.appservice.myData )
  }


}
