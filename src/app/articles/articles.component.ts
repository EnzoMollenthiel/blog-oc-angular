import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {


  articleName: string ='Mon premier Post';
  articleContent: string = 'Ici mon contenu';

  constructor() { }

  ngOnInit() {
  }

}
