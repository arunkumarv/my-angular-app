import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  @Input('my-title') myTitle:string;

  isThere: boolean = false;

  arr: Array<any> = [];

  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor( private appservice: AppService, private http: HttpClient ) {
    
    console.log ('hi from main')
  }

  ngOnInit(): void {
    
    
  }

  fetchData() {

    this.appservice.someMethod(this.isThere)

    this.isThere = true;

    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe( resp => {

      this.arr = resp; 
      
      console.log ( resp );
    })
  }

   

  clickMethod() {

    console.log ( Date() )
    
    this.clickEvent.emit('Hello from main')
  }

  updateThroughService() {

    this.appservice.myData = "Updated"
  }
}
