import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movieId: number;
movieName: string;
movieDescription: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = Number(params['id']);
      console.log(params);
        });

      this.route.queryParams.subscribe((queryParams)=>{
        this.movieName = (queryParams['movieName']);
        this.movieDescription = queryParams['movieDescription']
        console.log(this.movieName);
        console.log(this.movieDescription);
      });
   
  }

}
