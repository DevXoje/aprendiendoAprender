import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
	bgNewsCard="../../assets/img/news/news1.jpg";

	constructor(private library: FaIconLibrary) {
			library.addIcons(faAngleDoubleRight);
		}

	ngOnInit(): void {
	}

}
