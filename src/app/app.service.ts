import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  someEmit: EventEmitter<any> = new EventEmitter<any>();

  myData: string = 'temp';

  constructor() {
    
    console.log ('Hi from service')
  }

  someMethod (b){

      this.someEmit.emit( b)
  }
}
