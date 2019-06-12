import { Component } from "@angular/core";
import { NewsProviderService } from "../news-provider.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  articles: any;
  data: any;
  goToDetailed(article) {
    this.router.navigate(["newsdetail"]);
    this.newsProvider.currentArticle = article;
    localStorage.setItem("is", "1");
  }
  constructor(
    private newsProvider: NewsProviderService,
    private router: Router
  ) {}
  ngOnInit() {
    this.newsProvider
      .getNews("top-headlines?sources=techcrunch")
      .subscribe(data => {
        this.data = data;
        // console.log(data);
      });
  }
}
