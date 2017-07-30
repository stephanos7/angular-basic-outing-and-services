import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
totalCount: number = 0;

  constructor() { }

  increment(){
    this.totalCount ++;
    console.log(`the count is now ${this.totalCount }`);
  }
}
