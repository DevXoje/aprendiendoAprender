import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

	constructor() { 
		ScrollReveal().reveal(".showcase");
		ScrollReveal().reveal(".news-galery",{delay:500});
		ScrollReveal().reveal(".cards-banner",{delay:500});
	}

	ngOnInit(): void {
	}

}
