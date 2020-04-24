window.addEventListener("load",()=>{
	ScrollReveal().reveal('.showcase',{delay:500});
	ScrollReveal().reveal('.news-cards',{delay:500});
	ScrollReveal().reveal('.cards-banner-one',{delay:500});
	ScrollReveal().reveal('.cards-banner-two',{delay:500});
	


	var siteBar=document.querySelector(".nav-main ul.nav-menu");
	var btnActiveSiteBar=document.querySelector(".menu-btn");
	btnActiveSiteBar.addEventListener("click",()=>{
		siteBar.classList.toggle("show");
	});
	
});