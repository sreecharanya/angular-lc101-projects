import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks=['https://heartfulness.org/en/heartfulness-offerings/?utm_source=google&utm_medium=cpc&utm_campaign=offerings&utm_term=heartfulness%20offerings&gclid=Cj0KCQjwpZT5BRCdARIsAGEX0zmko_0rtsSn65Hjj6m9novINPxfZtMxROkYsk_xbD804-LhOkqFVXcaAgskEALw_wcB','https://heartfulness.org/us/']

  constructor() { }

  ngOnInit() {
  }

}
