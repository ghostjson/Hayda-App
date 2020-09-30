import { Component, Input, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-redirect-confirm",
  templateUrl: "./redirect-confirm.component.html",
  styleUrls: ["./redirect-confirm.component.scss"],
})
export class RedirectConfirmComponent implements OnInit {
  @Input("content") content: {
    background: string;
    title: string;
    url: string;
  };

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Warning!",
      message: "<strong>The link will open outside the app.</strong>",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
            return false;
          },
        },
        {
          text: "Confirm",
          handler: () => {
            console.log("Confirm Okay");
            window.open(this.content.url, "_system", "location=yes");
          },
        },
      ],
    });

    await alert.present();
  }
}
