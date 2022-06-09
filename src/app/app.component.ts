import { Component, VERSION, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {
    this.mySubscription = interval(5000).subscribe((x) => {
      this.updateCurrentTime();
    });
  }

  mySubscription: Subscription;
  currentTime: string;

  updateCurrentTime() {
    let now = new Date();
    this.currentTime = now.toISOString();
  }

  ngOnInit(): void {
    this.updateCurrentTime();
  }
}
