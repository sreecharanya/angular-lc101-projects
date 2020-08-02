import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photo';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://banner2.cleanpng.com/20180624/gsz/kisspng-meditation-heartfulness-shri-ram-chandra-mission-w-5b2fbae6f00729.5231905315298546949832.jpg';
  image3 = 'https://image.shutterstock.com/image-vector/meditating-human-lotus-pose-yoga-260nw-1145960876.jpg';

  constructor() { }

  ngOnInit() {
  }

}