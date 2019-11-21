import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }


  items = [
    {
      title: 'Mon premier post'
    },
    {
      title: 'Mon deuxième post'
    },
    {
      title: 'Encore un post'
    }
  ];

  ngOnInit() {
  }

}
