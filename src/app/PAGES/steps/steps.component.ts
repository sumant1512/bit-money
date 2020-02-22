import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-steps",
  host: { class: "w-100" },
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.css"]
})
export class StepsComponent {
  // This is steps list details
  stepsDetails: object[] = [
    {
      partA: {
        stepHead: "01. Registration On The Platform",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-users"
      },
      partB: {
        stepHead: "02. Passing Verification",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-check-square-o"
      }
    },
    {
      partA: {
        stepHead: "03. Creating An Application For a Loan",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-pencil-square-o"
      },
      partB: {
        stepHead: "04. Financing a Loan",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-university"
      }
    },
    {
      partA: {
        stepHead: "05. Activating a Loan",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-bell-o"
      },
      partB: {
        stepHead: "06. Receiving Funds",
        stepBody:
          "Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.",
        icon: "fa fa-paw"
      }
    }
  ];
}
