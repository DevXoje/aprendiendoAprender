opciones={
	layaout:{
		rounding:false
	}
}
const grid= new Muuri('.grid',opciones);

window.addEventListener('load',main);

function main() {
	grid.refreshItems().layout();

	var wrapper=document.getElementById('galery');
	wrapper.classList.add('imagenes-cargadas');

	const enlaces=document.querySelectorAll("#categorias li a");

	const searcher=document.getElementById("barra-busqueda");
	filtrarPorCategoria(enlaces);
	
	filtrarPorKeywords(searcher);

	
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

