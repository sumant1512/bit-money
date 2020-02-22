import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  host: { class: "w-100" },
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  lock: boolean = true;
  constructor() {}

  ngOnInit() {
    // This function is to change lock and unlock after every second
    setInterval(() => {
      this.lockUnlock();
    }, 1000);
  }

  // This finction is for to open and close lock
  lockUnlock() {
    if (this.lock) {
      this.lock = false;
    } else {
      this.lock = true;
    }
  }
}
