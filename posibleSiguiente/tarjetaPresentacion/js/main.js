window.addEventListener("load",mainSlider);
var imgs=["./img/banner.jpg","./img/banner2.jpg","./img/banner3.jpg","./img/banner4.jpg"];
var banner={
	padre:document.querySelector(".slider_banner"),
	numeroSlides:imgs.length,
	posicion:0
};

function mainSlider() {
	setPrimeraImagen();
	setAltoBanner();
	window.addEventListener("resize",setAltoBanner);
	clickRight();

}

function setPrimeraImagen() {
	banner.padre.querySelector("#banner").getElementsByClassName("slide")[0].classList.add("venir");
	
}


function setAltoBanner() {	
	var alturaActual=banner.padre.querySelector("#banner").getElementsByClassName("slide")[0].height;
	banner.padre.setAttribute("style","height: "+alturaActual+"px");
}

/*Botones */

function clickRight() {
	document.getElementById("banner-prev").addEventListener("click",(e)=>{
		e.preventDefault();
		var oldImg,newImg;
		
		oldImg=document.querySelector("#banner").getElementsByClassName("actual")[0];
		newImg=document.querySelector("#banner").getElementsByClassName("nueva")[0];
		oldImg.classList.add("irse");

		newImg.toggleAttribute("src",imgs[banner.posicion]);
		newImg.classList.add("venir");

		if(banner.numeroSlides<=banner.posicion){
			banner.posicion=0;
		}
		banner.posicion++;
	});
}