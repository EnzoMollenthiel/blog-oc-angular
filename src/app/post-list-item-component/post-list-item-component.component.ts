import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  articleName: string ='Mon premier Post';
  articleContent: string = 'Ici mon contenu';
  loveIts: number = 0;
  created_at = new Date();

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
