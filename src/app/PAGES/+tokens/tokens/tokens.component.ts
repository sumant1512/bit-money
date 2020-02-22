import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tokens",
  templateUrl: "./tokens.component.html",
  styleUrls: ["./tokens.component.css"]
})
export class TokensComponent {
  // This is bonus list
  bonusList = [
    { time: "1Day", bonus: "35" },
    { time: "2-4Days", bonus: "20" },
    { time: "5-13Days", bonus: "10" },
    { time: "14-31Days", bonus: "0" }
  ];
}
