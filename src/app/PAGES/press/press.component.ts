import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-press",
  templateUrl: "./press.component.html",
  styleUrls: ["./press.component.css"]
})
export class PressComponent {
  // This is currency list
  currencyList = [
    { image: "../../../assets/currencies/1.png" },
    { image: "../../../assets/currencies/2.png" },
    { image: "../../../assets/currencies/3.png" },
    { image: "../../../assets/currencies/4.png" },
    { image: "../../../assets/currencies/5.png" },
    { image: "../../../assets/currencies/6.png" },
    { image: "../../../assets/currencies/7.png" },
    { image: "../../../assets/currencies/8.png" }
  ];
}
