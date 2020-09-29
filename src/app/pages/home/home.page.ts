import { Component } from "@angular/core";
import { LinkCardInterface } from "../../components/link-card/link-card.interface";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  health_hub: LinkCardInterface[];
  blogs: LinkCardInterface[];

  constructor(private navCtrl: NavController) {
    // this.blogs = [
    //   {
    //     background: "../../../assets/images/placeholders/blog_mock_image.jpg",
    //     title: "BlogTitle 1",
    //     url: "#",
    //   },
    //   {
    //     background: "../../../assets/images/placeholders/blog_mock_image2.jpg",
    //     title: "BlogTitle 3",
    //     url: "#",
    //   },
    // ];
    this.health_hub = [
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
      {
        background: "../../../assets/images/placeholders/health-insurance.png",
        title: "Insure Your Health",
        url: "https://www.healthcare.gov/get-coverage/",
      },
      {
        background: "../../../assets/images/placeholders/stroke.png",
        title: "Stroke Video",
        url:
          "https://www.youtube.com/watch?v=POlmGdHD0Us&ab_channel=NationalStrokeAssociation",
      },
      {
        background: "../../../assets/images/placeholders/heart.png",
        title: "Heart Health",
        url: "https://www.heart.org/en/healthy-living",
      },
      {
        background: "../../../assets/images/placeholders/health-insurance.png",
        title: "Insure Your Health",
        url: "https://www.healthcare.gov/get-coverage/",
      },
      {
        background: "../../../assets/images/placeholders/mindfulness.png",
        title: "Mindfulness",
        url: "https://www.helpguide.org/harvard/benefits-of-mindfulness.htm",
      },
      {
        background: "../../../assets/images/placeholders/mint.jpg",
        title: "Mint App",
        url: "https://www.helpguide.org/harvard/benefits-of-mindfulness.htm",
      },
    ];
  }

  async goToWorkout() {
    await this.navCtrl.navigateForward("workout");
  }

  async goToBlog() {
    await this.navCtrl.navigateForward("blog");
  }
}
