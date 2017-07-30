import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
viewCount: number = 0;

  constructor() { }

  incrementViewCount(){
    this.viewCount ++;
    console.log(`the count is now ${this.viewCount }`);
  }
}
