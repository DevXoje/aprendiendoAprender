var btn_AddPhoto=document.createElement("button");
btn_AddPhoto.addEventListener("click",addPhoto);

var wrapper=document.getElementsByClassName("logo")[0];
wrapper.appendChild(btn_AddPhoto);

var imgMetaData={
	content:{
		tag:document.createElement("img"),
		ruta:""
	},
	wrapper:document.createElement("figure"),
	mainWrapper:{
		tag:document.createElement("article"),
		category:"",
		keywords:[],
		descripcion:""
	}

}

function addPhoto() {

	var galeria=document.getElementById("galery");

	var file=document.createElement("input");
	file.setAttribute("type","file");
	galeria.appendChild(file);
	file.click();

	imgMetaData.content.ruta=getInfomation("Introduzca la ruta de la imagen");
	imgMetaData.content.tag.src=imgMetaData.content.ruta;
	setClasesCss()
	setMetadata();
	imgMetaData.wrapper.appendChild(imgMetaData.content.tag);
	imgMetaData.mainWrapper.tag.appendChild(imgMetaData.wrapper);
	galeria.appendChild(imgMetaData.mainWrapper.tag);
	
}

function setClasesCss() {
	imgMetaData.wrapper.classList.add("item-content");
	imgMetaData.mainWrapper.tag.classList.add("item");
}

function setMetadata() {
	imgMetaData.mainWrapper.category=getInfomation("Introduzca la categoria a la que pertenece la imagen");
	imgMetaData.mainWrapper.keywords.push(getInfomation("Introduzca una Keyword asociada a  la imagen"));
	imgMetaData.mainWrapper.descripcion=getInfomation("Introduzca una descripcion para la imagen");
	imgMetaData.mainWrapper.tag.dataset.category=imgMetaData.mainWrapper.category;
	imgMetaData.mainWrapper.tag.dataset.keywords=imgMetaData.mainWrapper.keywords;
	imgMetaData.mainWrapper.tag.dataset.descripcion=imgMetaData.mainWrapper.descripcion;
}


	/*https://www.html5rocks.com/es/tutorials/file/dndfiles/ */
function getInfomation(mensaje="") {
	var input=prompt(mensaje);
	if (input == null || input == "") {
		alert("User cancelled the prompt.");
	}
	return input;
}