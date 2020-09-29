import { Component, ViewChild } from "@angular/core";
import { LinkCardInterface } from "../../components/link-card/link-card.interface";
import { NavController, IonReorderGroup } from "@ionic/angular";
import { ItemReorderEventDetail } from "@ionic/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  health_hub: LinkCardInterface[];
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(private navCtrl: NavController) {
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

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    this.health_hub = ev.detail.complete(this.health_hub);
  }
}
