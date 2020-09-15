import { Component, OnInit } from '@angular/core';
import { LinkCardComponent } from 'src/app/components/link-card/link-card.component';
import { LinkCardInterface } from 'src/app/components/link-card/link-card.interface';


@Component({
  selector: "app-health-club",
  templateUrl: "./health-club.page.html",
  styleUrls: ["./health-club.page.scss"],
})
export class HealthClubPage implements OnInit {

  body_health: LinkCardInterface[];
  brain_health: LinkCardInterface[];
  heart_health: LinkCardInterface[];
  insure_health: LinkCardInterface[];
  mental_health: LinkCardInterface[];
  wealth_tips: LinkCardInterface[];

  constructor() {}

  ngOnInit() {
    this.body_health = [
      {
        background: "../../../assets/images/placeholders/health_sugar.jpg",
        title: "Know your sugar",
        url: "https://www.diabetes.org/diabetes-risk/prediabetes",
      },
      {
        background: "../../../assets/images/placeholders/health-fitness.jpg",
        title: "Fitness tools",
        url: "https://www.myfitnesspal.com/",
      },
    ];

    this.brain_health = [
      {
        background: "../../../assets/images/placeholders/stroke.png",
        title: "Stroke Video",
        url:
          "https://www.youtube.com/watch?v=POlmGdHD0Us&ab_channel=NationalStrokeAssociation",
      },
    ];

    this.heart_health = [
      {
        background: "../../../assets/images/placeholders/heart.png",
        title: "Heart Health",
        url: "https://www.heart.org/en/healthy-living",
      },
    ];


    this.insure_health = [
      {
        background: "../../../assets/images/placeholders/health-insurance.png",
        title: "Insure Your Health",
        url: "https://www.healthcare.gov/get-coverage/",
      },
    ];

    this.mental_health = [
      {
        background: "../../../assets/images/placeholders/mindfulness.png",
        title: "Mindfulness",
        url: "https://www.helpguide.org/harvard/benefits-of-mindfulness.htm",
      },
    ];

    this.wealth_tips = [
      {
        background: "../../../assets/images/placeholders/mint.jpg",
        title: "Mint App",
        url: "https://www.helpguide.org/harvard/benefits-of-mindfulness.htm",
      },
    ];
  }
}
