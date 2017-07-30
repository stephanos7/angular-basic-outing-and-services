import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
viewCount: number = 0;
likeCount: number = 0;

  constructor() { }

  incrementViewCount():number{
    return this.viewCount ++;
  }

  incrementLikeCount(){
    this.likeCount++
    console.log(this.likeCount);
  }
}
