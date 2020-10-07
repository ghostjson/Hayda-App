import { MenuCardInterface } from "./menu-card.interface";
import { Component, Input, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-menu-card",
  templateUrl: "./menu-card.component.html",
  styleUrls: ["./menu-card.component.scss"],
})
export class MenuCardComponent implements OnInit {
  @Input("content") content: MenuCardInterface;

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}
}
