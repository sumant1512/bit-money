import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor() {}

  ngOnInit() {
    // This is to update time on every second
    setInterval(() => {
      this.timeUpdate();
    }, 1000);
  }

  // This function is to update time
  timeUpdate() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
