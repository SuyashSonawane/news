import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const api_key = "de51406da91a472eb69b8f63a781e84d";
const api_url = "https://newsapi.org/v2";

@Injectable()
export class NewsProviderService {
  currentArticle: any;
  getNews(url) {
    return this.http.get(`${api_url}/${url}&apikey=${api_key}`);
  }

  constructor(private http: HttpClient) {}
}
