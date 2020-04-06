/*Usando fontAwesome https://fontawesome.com/
	insetar en HTML -->	<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
*/

window.addEventListener("load",mainSwitch);

function mainSwitch() {
	
	const header=document.getElementsByTagName("hgroup")[0];
	
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
function createBtnSwitch(elemtBefore=new HTMLElement()){

	var btn,wrapper,item;

	btn=document.createElement("button");
	btn.classList.add("switch");

	wrapper=document.createElement("span");
	item=document.createElement("i");
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

