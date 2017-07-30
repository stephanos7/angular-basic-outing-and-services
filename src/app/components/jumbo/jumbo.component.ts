import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css'],
})

export class JumboComponent implements OnInit {
h1Jumbo : string = "Welcome to Vint cinema";
pJumbo : string = "lovingly built while practicing basic Angular 2 components, services and routing";
forAbout: string;

  constructor() { }

  ngOnInit() {
  }

}
