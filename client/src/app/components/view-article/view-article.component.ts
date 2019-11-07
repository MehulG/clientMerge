import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../services/article.service'
  import { from } from 'rxjs';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
articleByTitle;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService;
  }

}
