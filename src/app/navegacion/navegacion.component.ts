import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
	logoBurguer="../../assets/img/LogoBrandXojeSenpai.png";
	//numEnlaces=0;
	enlaces=[
		{
			nombre:"Principal",
			path:"/landingPage-component",
		},
		{
			nombre:"Articulos",
			path:"/articulos-component",
		},
		{
			nombre:"Videos",
			path:"/videos-component",
		},
		{
			nombre:"Contacto",
			path:"/contacto-component",
		}
	];
  	constructor(private library: FaIconLibrary) {
	library.addIcons(faSearch,faBars);
	}

 	ngOnInit(): void {
  	}

  	showSlider() {
		document.querySelector(".nav-menu").classList.toggle("show-slider-nav");
  	}
}
