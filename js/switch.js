/*Usando fontAwesome https://fontawesome.com/
	insetar en HTML -->	<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
*/

window.addEventListener("load",mainSwitch);

function mainSwitch() {
	setStylesSwitch();
	
	const header=document.getElementById("nav-main");
	
	const btnSwitch=createBtnSwitch(header);

	btnSwitch.addEventListener("click",()=>{
		document.body.classList.toggle('dark');
		btnSwitch.classList.toggle('active');

		if(document.body.classList.contains('dark')){
			localStorage.setItem('dark-mode','true');
		}else{
			localStorage.setItem('dark-mode','false');
		}
	});
}

function setStylesSwitch() {
	var path = window.location.pathname;
	var page = path.split("/").pop();

	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href =page=="index.html"?'./css/switchModoNoche.css':'../css/switchModoNoche.css';
    head.appendChild(link);
}

function createBtnSwitch(elemtBefore=new HTMLElement()){

	var btn,wrapper,item;
	btn=document.createElement("button");
	wrapper=document.createElement("span");
	item=document.createElement("i");

	btn.classList.add("switch");
	item.classList.add("far","fa-sun");

	wrapper.appendChild(item);
	btn.appendChild(wrapper);

	wrapper=document.createElement("span");
	item=document.createElement("i");

	item.classList.add("fas","fa-moon");
	
	wrapper.appendChild(item);
	btn.appendChild(wrapper);

	elemtBefore.appendChild(btn);
	return btn;
}

