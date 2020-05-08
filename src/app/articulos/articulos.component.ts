import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-articulos',
	templateUrl: './articulos.component.html',
	styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
	
	constructor() {}
		

ngOnInit(): void {
	
}
}


/*
export class ArticulosComponent implements OnInit {
	opciones={
		layaout:{
			rounding:false
		}
	};
	Muuri = require('muuri');

	itemsGrid=[
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		},
		{
			category:"ciudades",
			keywords:"dia coche calles",
			descripcion:"Descripcion Random1",
			pathImg:"../../assets/img/galeria/ciudad1.png"
		}
	];
	
	constructor() {
		
		this.Muuri('.grid',this.opciones);		
	}

	ngOnInit(): void {
		this.Muuri.refreshItems().layout();

		let wrapper=document.getElementById('galery');
		wrapper.classList.add('imagenes-cargadas');

		const enlaces=document.querySelectorAll("#categorias li a");

		const searcher=document.getElementById("barra-busqueda");

		const overlay=document.getElementById("overlay");

		filtrarPorCategoria(enlaces);
	
		filtrarPorKeywords(searcher);

		gestorOverlay(overlay);
	}

	

}
function filtrarPorCategoria(list=new NodeList()) {
	list.forEach(element => {
		element.addEventListener("click",(event)=>{
			event.preventDefault();
			list.forEach((enlace)=>enlace.removeChild('actual'));			
			event.target.classList.add('actual');	
			
			const categoryNow=event.target.innerHTML.toLowerCase();
			categoryNow==='todos'?grid.filter('[data-category]'): grid.filter(`[data-category="${categoryNow}"]`);
		});		
	});
}
function filtrarPorKeywords(searcher=new HTMLElement()) {
	searcher.addEventListener("input",()=>{
		const input=searcher.textContent;
		Muuri.filter((item)=>item.getElement().dataset.keywords.includes(input));
		
		
	});
}

function gestorOverlay(overlay=new HTMLElement()){
	let imagenes=document.querySelectorAll(".grid .item .item-content img");
	for (let i = 0; i < imagenes.length; i++) {
		setAtributosImg(imagenes[i]);
		document.querySelector("#btn-cerrar-popup").addEventListener("click",()=>{overlay.classList.remove("active")});
		
	}

	overlay.addEventListener("click",(event)=>{
		if(event.target.id=="overlay"){
			overlay.classList.remove("active");
		}	
	});
}

function setAtributosImg(img=new HTMLElement()) {
	img.addEventListener("click",()=>{
		const ruta=img.getAttribute('src');
		const descripcion=img.parentNode.parentNode.dataset.descripcion;
		overlay.classList.add("active");
		document.querySelector("#overlay img").src=ruta;
		document.querySelector("#overlay figcaption").innerHTML=descripcion;
	});	
}
*/