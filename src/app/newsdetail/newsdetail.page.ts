import { Component, OnInit } from "@angular/core";
import { NewsProviderService } from "../news-provider.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-newsdetail",
  templateUrl: "./newsdetail.page.html",
  styleUrls: ["./newsdetail.page.scss"]
})
export class NewsdetailPage implements OnInit {
  canShow = true;
  data: any;
  constructor(private news: NewsProviderService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("is") === "1") {
      localStorage.removeItem("is");
      console.log(this.data);
      this.data = this.news.currentArticle;
    } else {
      this.router.navigate(["/"]);
    }
  }
}
