var btn_AddPhoto=document.createElement("button");

btn_AddPhoto.addEventListener("click",addPhoto);

var wrapper=document.getElementsByClassName("logo")[0];
wrapper.appendChild(btn_AddPhoto);

function addPhoto() {	
	var item=document.createElement("article");
	item.classList.add("item");
	var categoria="";
	categoria=prompt("Introduzca la categoria a la que pertenece la imagen");
	if (categoria == null || categoria == "") {
		alert("User cancelled the prompt.");
	}
	alert(categoria);
	item.setAttribute("data-categoria",categoria);
	/*https://www.html5rocks.com/es/tutorials/file/dndfiles/ */
}
