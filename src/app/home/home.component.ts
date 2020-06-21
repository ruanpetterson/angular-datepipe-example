import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  now: Date;

  constructor() {
    this.now = new Date();
  }

  ngOnInit(): void {
  }
}
