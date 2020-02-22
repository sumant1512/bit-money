import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-advisors",
  templateUrl: "./advisors.component.html",
  styleUrls: ["./advisors.component.css"]
})
export class AdvisorsComponent {
  // This is advisor list
  advisorList = [
    {
      name: "Mason Liam",
      image: "../../../../assets/ajay.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    },
    {
      name: "Jammy Doe",
      image: "../../../../assets/jennifer.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    },
    {
      name: "Daniel Matthew",
      image: "../../../../assets/akshay.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    },
    {
      name: "Henry Jack",
      image: "../../../../assets/maria.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    },
    {
      name: "Jhon Wick",
      image: "../../../../assets/maria.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    },
    {
      name: "Clara Jack",
      image: "../../../../assets/maria.png",
      designation: "Co-Founder & CEO",
      bio:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
    }
  ];
}
