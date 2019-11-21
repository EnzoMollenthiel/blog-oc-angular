import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {


  articleName: string ='Mon premier Post';
  articleContent: string = 'Ici mon contenu';
  loveIts: number = 0;

  constructor() { }

  onUp() {
    this.loveIts++;
    console.log(this.loveIts); 
  }

  onDown() {
    this.loveIts--;
    console.log(this.loveIts);
  }


  ngOnInit() {
  }

}
