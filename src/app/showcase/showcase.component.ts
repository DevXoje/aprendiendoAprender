import { Component, OnInit } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  
  bgShowcase="../../assets/img/news/showcase2.jpg";

  constructor(private library: FaIconLibrary) {
		library.addIcons(faAngleDoubleRight);
	}
  ngOnInit(): void {
  }

}
