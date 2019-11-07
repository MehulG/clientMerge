import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { ArticleService } from './../../services/article.service'
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
//import { LMarkdownEditorModule } from 'ngx-markdown-editor';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import { EventEmitter } from 'protractor';
//import { string } from 'prop-types';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article;
  AddContent;
  query1;
  TitleInput = "";
  ContentInput = "";
  TagsInput = "";
  Content=['1'];
    @Output() Event = new EventEmitter();
  constructor(private articleService: ArticleService, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.articleService.get().subscribe(val => console.log(val));
    this.articleService;
  }
  OnChangeTitle(event: any) {
    this.TitleInput = event.target.value;
    if(this.TitleInput == 'a'){

    }
    console.log(this.TitleInput);
  }
  OnChangeContent(event: any) {
    this.ContentInput = event.target.value;
    console.log(this.ContentInput);
  }
  OnChangeTags(event: any) {
    this.TagsInput = event.target.value;
    console.log(this.TagsInput);
  }

  createArticle() {
    this.query1 = {
      Title: this.TitleInput,
      Content: this.ContentInput,
      UserId:"123",
      Tags:this.TagsInput
    }
    console.log(this.query1);
    this.articleService.addArticle({
      Title: this.TitleInput,
      Content: this.ContentInput,
      UserId:"1234",
      Tags:this.TagsInput
    }).subscribe(res => {console.log(res);
      this.router.navigate(["/article/"+this.query1.UserId])
    });
  
  }
  On = 0;
  add(AddContent){
    // var myElements = (document.querySelector('#form'));
    // myElements.append();
    // this.AddContent = AddContent;
    // this.Event.emit(this.AddContent);
    event.preventDefault();
    this.On = 1;
  }
}