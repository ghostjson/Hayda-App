import { Component, OnInit } from "@angular/core";
import { LinkCardComponent } from "src/app/components/link-card/link-card.component";
import { LinkCardInterface } from "src/app/components/link-card/link-card.interface";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.page.html",
  styleUrls: ["./blog.page.scss"],
})
export class BlogPage implements OnInit {
  blogs: LinkCardInterface[];

  constructor(private navCtrl: NavController) {}
  async goToBlog() {
    await this.navCtrl.navigateForward("blog");
  }

  ngOnInit() {
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

  cardClick(url: string): void {
    window.open(url, "_system", "location=yes");
  }
}
