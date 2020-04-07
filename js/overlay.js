/*Usando muuri https://haltu.github.io/muuri/ 
	insetar en HTML -->
		<script src="https://unpkg.com/web-animations-js@2.3.2/web-animations.min.js"></script>
		<script src="https://unpkg.com/muuri@0.8.0/dist/muuri.min.js"></script>
*/

var opciones={
	layaout:{
		rounding:false
	}
}
const grid= new Muuri('.grid',opciones);

window.addEventListener("load",mainGalery);


function mainGalery() {
	setStylesGalery();
	grid.refreshItems().layout();

	var wrapper=document.getElementById('galery');
	wrapper.classList.add('imagenes-cargadas');

	const enlaces=document.querySelectorAll("#categorias li a");

	const searcher=document.getElementById("barra-busqueda");

	const overlay=document.getElementById("overlay");

	filtrarPorCategoria(enlaces);
	
	filtrarPorKeywords(searcher);

	gestorOverlay(overlay);

	
}

function setStylesGalery() {
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/galery.css';
    head.appendChild(link);
}

function filtrarPorCategoria(list=new NodeList()) {
	list.forEach(element => {
		element.addEventListener("click",(event)=>{
			event.preventDefault();
			list.forEach((enlace)=>enlace.classList.remove('actual'));			
			event.target.classList.add('actual');	
			
			const categoryNow=event.target.innerHTML.toLowerCase();
			categoryNow==='todos'?grid.filter('[data-category]'): grid.filter(`[data-category="${categoryNow}"]`);
		});		
	});
}

function filtrarPorKeywords(searcher=new HTMLElement()) {
	searcher.addEventListener("input",(event)=>{
		const input=event.target.value;
		/*Includes No iva ...ARREGLADO creo que era xk no todos los elementos tenian ese dataset*/
		grid.filter((item)=>item.getElement().dataset.keywords.includes(input));
		
		
	});
}

function gestorOverlay(overlay=new HTMLElement()){
	document.querySelectorAll(".grid .item .item-content img").forEach((imagen)=>{
		setAtributosImg(imagen);
		document.querySelector("#btn-cerrar-popup").addEventListener("click",()=>{overlay.classList.remove("active")});
	});
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