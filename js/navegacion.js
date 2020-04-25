window.addEventListener("load",()=>{
	var mainWrapper=document.getElementsByClassName("mainWrapper")[0];
	var contentMainWrapper=document.createElement("div");
	var btn=document.createElement("div");
	var iconBurger=document.createElement("i");
	var navegador=document.createElement("nav");
	var brandLogo=document.createElement("img");
	var navUnorderList=document.createElement("ul");
	var listItems=[document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li")];
	var linkItems=[document.createElement("a"),document.createElement("a"),document.createElement("a"),document.createElement("a")];
		
	
	var btnUnorderList=document.createElement("ul");
	var separador=document.createElement("hr");
	
	btn.classList.add("menu-btn");
	iconBurger.classList.add("fas","fa-bars");
	btn.appendChild(iconBurger);
	document.getElementsByTagName("body")[0].appendChild(btn);

	contentMainWrapper.classList.add("container");
	mainWrapper.insertAdjacentElement("afterbegin",contentMainWrapper) 
	navegador.classList.add("nav-main");
	navegador.id="nav-main";
	contentMainWrapper.appendChild(navegador);

	var path = window.location.pathname;
	var page = path.split("/").pop();
	
	brandLogo.src=page=="index.html"?"./assets/img/notice/LogoBrandXojeSenpai.png":"../assets/img/notice/LogoBrandXojeSenpai.png";

	
	brandLogo.alt="XojeNews";
	brandLogo.classList.add("nav-brand");
	navegador.appendChild(brandLogo);

	navUnorderList.classList.add("nav-menu");
	navegador.appendChild(navUnorderList);
	
	linkItems[0].href=page=="index.html"?"#":"../index.html";
	linkItems[0].innerHTML="Princial";

	linkItems[1].href=page=="index.html"?"./html/#":"./#";
	linkItems[1].innerHTML="La segunda";

	linkItems[2].href=page=="index.html"?"./html/gallery.html":"./gallery.html";
	linkItems[2].innerHTML="Multimedia";

	linkItems[3].href=page=="index.html"?"./html/contactUs.html":"./contactUs.html";
	linkItems[3].innerHTML="Contacto";

	listItems[0].appendChild(linkItems[0]);
	
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].appendChild(linkItems[i]);
		navUnorderList.appendChild(listItems[i]);		
	}
	

	btnUnorderList.classList.add("nav-menu-right");
	navegador.appendChild(btnUnorderList);
	//<li><a href="" class="fas fa-search"></a></li> lupa-search

	contentMainWrapper.appendChild(separador);

	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href=page=="index.html"?'./css/navegacion.css':'../css/navegacion.css';
    head.appendChild(link);
});
