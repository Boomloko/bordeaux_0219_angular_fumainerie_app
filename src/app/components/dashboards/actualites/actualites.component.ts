import { NewsService } from './../../../shared/services/news.service';
import { News } from './../../../shared/models/news';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  news: News[];
  events: Event[];
  onEventForm = false;
  onActualiteForm = false;
  button = true;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe((news) => {
      this.news = news;
    });
  }
  onEventsForm() {
    this.onEventForm = !this.onEventForm;
    this.button = !this.button;
  }
  onActualitesForm() {
    this.onActualiteForm = !this.onActualiteForm;
    this.button = !this.button;
  }
}
