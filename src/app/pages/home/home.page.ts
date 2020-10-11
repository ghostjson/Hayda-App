import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  ActionSheetController,
  IonReorderGroup,
} from "@ionic/angular";
import { ItemReorderEventDetail } from "@ionic/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {}

  async presentHealthHub() {
    const actionSheet = await this.actionSheetController.create({
      header: "Health Hub",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Body Health",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Brain Health",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Heart Health",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Insure Health",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Mindfullness",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Wealth Health",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentInTheKnow() {
    const actionSheet = await this.actionSheetController.create({
      header: "In The Know",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Blogs",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Health TIips",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Podcasts",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Playtime",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Videos",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentPremiumServices() {
    const actionSheet = await this.actionSheetController.create({
      header: "Premium Services",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Premium",
          handler: () => {
            this.presentPremium();
          },
        },
        {
          text: "Premium Plus",
          handler: () => {
            this.presentPremiumPlus();
          },
        },
        {
          text: "Shop",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentPremium() {
    const actionSheet = await this.actionSheetController.create({
      header: "Premium",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Chatbot coaching",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentPremiumPlus() {
    const actionSheet = await this.actionSheetController.create({
      header: "Premium Plus",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Live coaching",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentSetYourGoals() {
    const actionSheet = await this.actionSheetController.create({
      header: "Set Your Goals",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Weight",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Fitness",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Rewards",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentHowHaydaWorks() {
    const actionSheet = await this.actionSheetController.create({
      header: "How HAYDA Works",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "HAYDA Process",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Search",
          handler: () => {
            this.presentHowHaydaWorksSearch();
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentHowHaydaWorksSearch() {
    const actionSheet = await this.actionSheetController.create({
      header: "Search",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Topic",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Category",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  openChatBot() {
    this.router.navigate(["main/chatbot"]);
  }
}
