import { Component, OnInit, ViewChild } from "@angular/core";
import { IonReorderGroup } from "@ionic/angular";
import { ItemReorderEventDetail } from "@ionic/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-gamification",
  templateUrl: "./gamification.page.html",
  styleUrls: ["./gamification.page.scss"],
})
export class GamificationPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  constructor(private router: Router) {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }
  openBlog() {
    this.router.navigate(["main/blog"]);
  }
  ngOnInit() {}
}
