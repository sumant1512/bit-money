import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent {
  // This is news list
  newsList = [
    {
      group: [
        {
          number: 1,
          image: "../../../assets/news_1.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        },
        {
          number: 2,
          image: "../../../assets/news_2.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        },
        {
          number: 3,
          image: "../../../assets/news_3.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        }
      ]
    },
    {
      group: [
        {
          number: 4,
          image: "../../../assets/news_1.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        },
        {
          number: 5,
          image: "../../../assets/news_2.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        },
        {
          number: 6,
          image: "../../../assets/news_3.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        }
      ]
    },
    {
      group: [
        {
          number: 7,
          image: "../../../assets/news_2.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        },
        {
          number: 8,
          image: "../../../assets/news_3.jpg",
          date: "January 29, 2018",
          head: " Report about the team's trip to the road show",
          body:
            "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida."
        }
      ]
    }
  ];
}
