import { Component } from "@angular/core";
import { ToggleStatusEmit } from "./TYPES/toggle-status-emit.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Bit-Money";
  status: boolean = false;

  // This function is for toggel of header
  toggleforHeader(selectedPage: ToggleStatusEmit) {
    this.status = selectedPage.toggleStatus;
    if (selectedPage.selectedPage) {
      setTimeout(() => {
        document
          .getElementById(selectedPage.selectedPage)
          .scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }, 1);
    }
  }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    // This is for animated animation
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      "background-color": "#0d469f"
    };

    this.myParams = {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: "#101927"
        },
        shape: {
          type: "circle"
        },
        move: {
          speed: 10
        }
      }
    };
  }
}
