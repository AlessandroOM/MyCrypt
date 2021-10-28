import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/models/news';
import { RepositoryService } from 'src/app/Services/repository.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  public News : Array<news> =[]; 

  constructor(private repository: RepositoryService,
              public sanitizer: DomSanitizer)
  {
    this.News = this.repository.News;
    this.News.forEach(notice => {
      notice.ImgUrlSecure = this.sanitizer.bypassSecurityTrustResourceUrl(notice.ImgUrl);
    });

  }
 

  ngOnInit(): void {
  }

}
