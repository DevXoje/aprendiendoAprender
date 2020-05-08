import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bgBanner="../../assets/img/news/tech-red.jpg";
  constructor(private library: FaIconLibrary) {
    library.addIcons(faAngleDoubleRight);
    }
  ngOnInit(): void {
  }

}
