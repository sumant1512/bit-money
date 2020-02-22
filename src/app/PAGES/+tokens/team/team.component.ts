import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  // This is team list
  teamList = [
    {
      name: "Ajay Saxena",
      image: "../../../../assets/ajay.png",
      designation: "Co-Founder & CEO",
      bio:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      name: "Jeniffer Doe",
      image: "../../../../assets/jennifer.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
    },
    {
      name: "Akshay Handge",
      image: "../../../../assets/akshay.png",
      designation: "Co-Founder & CEO",
      bio:
        "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
      name: "Maria Willium",
      image: "../../../../assets/maria.png",
      designation: "Co-Founder & CEO",
      bio:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. There are many variations of passages."
    }
  ];
}
