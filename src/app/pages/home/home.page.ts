import { Component } from "@angular/core";
import { LinkCardInterface } from "../../components/link-card/link-card.interface";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  blogs: LinkCardInterface[];

  constructor(private navCtrl: NavController) {
    this.blogs = [
      {
        background: "../../../assets/images/placeholders/blog_mock_image.jpg",
        title: "BlogTitle 1",
        url: "#",
      },
      {
        background: "../../../assets/images/placeholders/blog_mock_image2.jpg",
        title: "BlogTitle 3",
        url: "#",
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
