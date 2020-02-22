import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doubts",
  templateUrl: "./doubts.component.html",
  styleUrls: ["./doubts.component.css"]
})
export class DoubtsComponent {
  // This is Question list
  questionList = [
    {
      heading: "- We are always carefull to our patient  and service",
      body:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
    },
    {
      heading: "- Who has access to my Health Records",
      body:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
    },
    {
      heading: "- We are always carefull to our patient  and service",
      body:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
    },
    {
      heading: "- Who has access to my Health Records",
      body:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
    }
  ];
}
