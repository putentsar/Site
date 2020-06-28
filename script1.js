let Table = document.getElementById('table')
let menuArea = document.getElementById('menuha')
let selectad = document.getElementById('admin')
let selectdi = document.getElementById('dist')
let selectty = document.getElementById('type')
let selectso = document.getElementById('socc sale')
let but = document.getElementById('but')
let next = document.getElementById('next')
let back = document.getElementById('back')
let op = document.getElementById('orderprice')
let ob = document.getElementById('order')
let modbody = document.getElementById('modal-body')
let firstcheck = document.querySelector('#defaultCheck1')
let notesOnPage = 10;

console.log(op.textContent);


let temp;
let data1;
let data;
let result;
let result1;
let result2;
let finalres;
function unique(arr) {//филттрует массив оставляя в нем тольок уникальные значенияия
	let result = [];
	
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	
	return result;
}

function getMessage(){
	let xhr = new XMLHttpRequest(); 
	
	xhr.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
	xhr.send();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			data = JSON.parse(xhr.responseText);
			data.sort(function(a,b){
				return b.rate-a.rate;
			});
			
			
			console.log(data);
			
			let district = JSON.parse(xhr.response).map(District => {return District.district;});//создаине json файла тольок из значений district
			let typeObject = JSON.parse(xhr.response).map(Type => {return Type.typeObject;});//создаине json файла тольок из значений type
			let admArea = JSON.parse(xhr.response).map(Area => {return Area.admArea;});//создаине json файла тольок из значений admArea
			(unique(admArea)).forEach(element => {//создание строки из json файла с уникальными элементами и добавление всех значений и получившейся строки в admin(select для админ округа)
				let admAreaOption = document.createElement('option');
				admAreaOption.innerHTML = `${String(element)}`;
				document.getElementById('admin').append(admAreaOption);
			});
			(unique(district)).forEach(element => {//создание строки из json файла с уникальными элементами и добавление всех значений и получившейся строки в district(select для района)
				let districtOption = document.createElement('option');
				districtOption.innerHTML = `${String(element)}`;
				document.getElementById('dist').append(districtOption);
				
			});
			(unique(typeObject)).forEach(element => {//создание строки из json файла с уникальными элементами и добавление всех значений и получившейся строки в type(select для типа)
				let typeObjectOption = document.createElement('option');
				typeObjectOption.innerHTML = `${String(element)}`;
				document.getElementById('type').append(typeObjectOption);
				
			});
			
			
			
		}
	}
}
getMessage();


function getSecMessage(){
	let xhr1 = new XMLHttpRequest(); 
	
	xhr1.open('GET', `data1.json`);
	xhr1.send();
	xhr1.onreadystatechange = function() {
		if (xhr1.readyState == 4 && xhr1.status == 200) {
			
			data1 = JSON.parse(xhr1.responseText);
		}  
	}
}













but.addEventListener('click',function(){//событие для кнопки but, которое фильтрует вывод заведений, исходя из выбраных select'ов, на экран 
	if (selectad.value != "null")//---------------------------------------------фильтры для финального json файла
	{
		result = data.filter(data=> data.admArea == selectad.value);
		
		if(selectty.value != "null")
		{
			result1 = result.filter(result=> result.typeObject == selectty.value); 
			if(selectdi.value != "null")
			{
				result2 = result1.filter(result1=> result1.district == selectdi.value);	
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}				 
			}
			else
			{
				result2=result1;
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}
			}
		}
		else {
			result1=result;
			if(selectdi.value != "null")
			{
				result2 = result1.filter(result1=> result1.district == selectdi.value);			
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}				 
			}
			else
			{
				result2=result1;
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}
			}
		}
	}
	
	
	
	
	
	
	else{
		result=data;
		if(selectty.value != "null")
		{
			result1 = result.filter(result=> result.typeObject == selectty.value); 
			if(selectdi.value != "null")
			{
				result2 = result1.filter(result1=> result1.district == selectdi.value);
				
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}
			}
			else
			{
				result2=result1;
				
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}
				
			}
		}
		else {
			result1=result;
			if(selectdi.value != "null")
			{
				result2 = result1.filter(result1=> result1.district == selectdi.value);	
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}				 
			}
			else
			{
				result2=result1;
				if(selectso.value == "true")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == true);					 
				}
				if(selectso.value == "false")
				{
					finalres= result2.filter(result2=> result2.socialPrivileges == false);					 
				}
				if(selectso.value == "null")
				{
					finalres=result2;
				}
			}
		}
		
	}//-----------------------------------------------------------------------------------------
	
	
	console.log(finalres);
	let notes = finalres.slice(0, 10);//создание json файла, который содержит первые 10 пунктов от финального json файла
	Table.innerHTML="";
	let pick_but = document.getElementsByClassName('btn-outline-secondary 1');
	let sets='set_1';
	for (let note of notes){//цикл для вывода первых 10-ти пунктов на экран----------------------
		let row = document.createElement('div');
		row.className="row border border-dark rounded m-3";
		Table.appendChild(row);
		let col;	
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.name;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.typeObject;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.address;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right  text-center p-3";
		row.appendChild(col);
		buttonn=document.createElement('button');
		buttonn.id=note.id;
		buttonn.className="btn btn-outline-secondary 1";
		buttonn.innerHTML="Выбрать";
		col.appendChild(buttonn);//--------------------------------
		
		
		
		for(let pick_bu of pick_but){//цикл пербора кнопок выбора ресторана и навешивание события клика на них 
			pick_bu.addEventListener('click',function(){// функция для вывода меню выбраного ресторана на экран
				let x = 0;
				if(this.id == note.id)
				{
					menuArea.innerHTML="";
					for(let unitdata1 of data1){
						let row = document.createElement('div');
						row.id="menurow"
						row.className="border border-dark rounded text-center";
						menuArea.appendChild(row);
						let col; 
						let img = document.createElement('img');
						img.src=unitdata1.img;
						row.appendChild(img);
						col = document.createElement('div');
						col.innerHTML=unitdata1.name;
						row.appendChild(col);
						col = document.createElement('div');
						row.appendChild(col);
						col = document.createElement('div');
						col.innerHTML=unitdata1.description;
						row.appendChild(col);
						x+=1;
						switch(x) {
							case 1:  
							col = document.createElement('div');
							col.innerHTML=note.set_1;
							row.appendChild(col);
							break;
							case 2:  
							col = document.createElement('div');
							col.innerHTML=note.set_2;
							row.appendChild(col);
							break;
							case 3:  
							col = document.createElement('div');
							col.innerHTML=note.set_3;
							row.appendChild(col);
							break;
							case 4:  
							col = document.createElement('div');
							col.innerHTML=note.set_4;
							row.appendChild(col);
							break;
							case 5:  
							col = document.createElement('div');
							col.innerHTML=note.set_5;
							row.appendChild(col);
							break;
							case 6:  
							col = document.createElement('div');
							col.innerHTML=note.set_6;
							row.appendChild(col);
							break;
							case 7:  
							col = document.createElement('div');
							col.innerHTML=note.set_7;
							row.appendChild(col);
							break;
							case 8:  
							col = document.createElement('div');
							col.innerHTML=note.set_8;
							row.appendChild(col);
							break;
							case 9:  
							col = document.createElement('div');
							col.innerHTML=note.set_9;
							row.appendChild(col);
							break;
							case 10:  
							
							col = document.createElement('div');
							col.innerHTML=note.set_10;
							row.appendChild(col);
							break;
						}
						
						let decre = document.createElement('button');
						decre.innerHTML='-';
						row.appendChild(decre);
						let input = document.createElement('input');
						input.className="minput";
						input.id="minput"
						input.value='0';
						row.appendChild(input);
						let incre = document.createElement('button');
						incre.innerHTML='+';
						row.appendChild(incre);
						incre.addEventListener('click',function(){//кнопка увеличения кол-во выбраного блюда
							
							input.value=Number(input.value)+1;
							console.log(col.textContent);
							op.innerHTML=Number(op.textContent)+Number(col.textContent);
							
						});
						
						
						decre.addEventListener('click',function(){//кнопка уменьшения кол-во выбраного блюда
							if (Number(input.value)>=1)
							{
								op.innerHTML=Number(op.textContent)-Number(col.textContent);
								input.value=Number(input.value)-1;
								console.log(input.value);
								
								
							}
						});
						
						ob.addEventListener('click',function(){	//кнопка создания модального окна при оформлении заказа
							let minputarr = document.getElementsByClassName('minput');
							let divname = document.getElementsByClassName('col name');
							modbody.innerHTML="";
							
							
							let span = document.createElement('span');
							span.innerHTML='Позиции заказа';
							modbody.appendChild(span);
							let div;
							console.log(minputarr);
							/*for (let minputunit of minputarr){
								if(Number(minputunit.value)>=1)
								{
								console.log(minputunit);
								let inputdiv;
								inputdiv = document.createElement('div');
								inputdiv.innerHTML=unitdata1.name;
								modbody.appendChild(inputdiv);
								}
							}*/
							
							
							div = document.createElement('div');
							div.innerHTML='Название : '+note.name;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Округ : '+note.admArea;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Район : '+note.district;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Адрес : '+note.address;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Rate : '+note.rate;
							modbody.appendChild(div);
						
							
							if(firstcheck.checked)//условия для применения специальных выбранных услуг---------------------------------------------
							{
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Быстрая доствка  +20%"
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Итоговая цена : "+Number(orderprice.textContent)*0.9;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
							}
							else {
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML=Number(orderprice.textContent);
								modbody.appendChild(div);
							}//-------------------------------------------------------------------------------------
							
						});
						
						
						
						
					}
					
					
				}
				
			});
		}	
		
		
	}
	
	
});

next.addEventListener('click', function(){//нажатие на кнопку пагинации next, отрезаются следующие от текущих 10 пунктов финального json файла и выводят их на экран, остальные функции такие же
	this.value = Number(this.value)+1;
	console.log(this.value);
	let pageNum = Number(this.value);
	let start = (pageNum - 1)* notesOnPage;
	let end = start + notesOnPage;
	let notes = finalres.slice(start, end);
	Table.innerHTML="";	
	let pick_but = document.getElementsByClassName('btn-outline-secondary 1')
	for (let note of notes){
		let row = document.createElement('div');
		row.className="row border border-dark rounded m-3";
		Table.appendChild(row);
		let col;	
		
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.name;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.typeObject;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right";
		col.innerHTML=note.address;
		row.appendChild(col);
		col=document.createElement('div');
		col.className="col border-right  text-center p-3";
		row.appendChild(col);
		let buttonn=document.createElement('button');
		buttonn.id=note.id;
		buttonn.className="btn btn-outline-secondary 1";
		buttonn.innerHTML="Выбрать";
		col.appendChild(buttonn);
		console.log(buttonn.id);
		
		
		for(let pick_bu of pick_but){
			pick_bu.addEventListener('click',function(){
				let x = 0;
				if(this.id == note.id)
				{
					menuArea.innerHTML="";
					for(let unitdata1 of data1){
						let row = document.createElement('div');
						row.id="menurow"
						row.className="border border-dark rounded text-center";
						menuArea.appendChild(row);
						let col; 
						let img = document.createElement('img');
						img.src=unitdata1.img;
						row.appendChild(img);
						col = document.createElement('div');
						col.innerHTML=unitdata1.name;
						row.appendChild(col);
						col = document.createElement('div');
						row.appendChild(col);
						col = document.createElement('div');
						col.innerHTML=unitdata1.description;
						row.appendChild(col);
						x+=1;
						switch(x) {
							case 1:  
							col = document.createElement('div');
							col.innerHTML=note.set_1;
							row.appendChild(col);
							break;
							case 2:  
							col = document.createElement('div');
							col.innerHTML=note.set_2;
							row.appendChild(col);
							break;
							case 3:  
							col = document.createElement('div');
							col.innerHTML=note.set_3;
							row.appendChild(col);
							break;
							case 4:  
							col = document.createElement('div');
							col.innerHTML=note.set_4;
							row.appendChild(col);
							break;
							case 5:  
							col = document.createElement('div');
							col.innerHTML=note.set_5;
							row.appendChild(col);
							break;
							case 6:  
							col = document.createElement('div');
							col.innerHTML=note.set_6;
							row.appendChild(col);
							break;
							case 7:  
							col = document.createElement('div');
							col.innerHTML=note.set_7;
							row.appendChild(col);
							break;
							case 8:  
							col = document.createElement('div');
							col.innerHTML=note.set_8;
							row.appendChild(col);
							break;
							case 9:  
							col = document.createElement('div');
							col.innerHTML=note.set_9;
							row.appendChild(col);
							break;
							case 10:  
							
							col = document.createElement('div');
							col.innerHTML=note.set_10;
							row.appendChild(col);
							break;
						}
						
						let decre = document.createElement('button');
						decre.innerHTML='-';
						row.appendChild(decre);
						let input = document.createElement('input');
						input.className="minput";
						input.id="minput"
						input.value='0';
						row.appendChild(input);
						let incre = document.createElement('button');
						incre.innerHTML='+';
						row.appendChild(incre);
						incre.addEventListener('click',function(){
							
							input.value=Number(input.value)+1;
							console.log(col.textContent);
							op.innerHTML=Number(op.textContent)+Number(col.textContent);
							
						});
						
						
						decre.addEventListener('click',function(){
							if (Number(input.value)>=1)
							{
								op.innerHTML=Number(op.textContent)-Number(col.textContent);
								input.value=Number(input.value)-1;
								console.log(input.value);
								
								
							}
						});
						ob.addEventListener('click',function(){	
							let minputarr = document.getElementsByClassName('minput');
							let divname = document.getElementsByClassName('col name');
							modbody.innerHTML="";
							
							
							let span = document.createElement('span');
							span.innerHTML='Позиции заказа';
							modbody.appendChild(span);
							let div;
							console.log(minputarr);
							
							
							div = document.createElement('div');
							div.innerHTML='Название : '+note.name;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Округ : '+note.admArea;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Район : '+note.district;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Адрес : '+note.address;
							modbody.appendChild(div);
							div = document.createElement('div');
							div.innerHTML='Rate : '+note.rate;
							modbody.appendChild(div);
							if(firstcheck.checked)//условия для применения специальных выбранных услуг---------------------------------------------
							{
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Быстрая доствка  +20%"
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Итоговая цена : "+Number(orderprice.textContent)*0.9;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
							}
							else {
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML=Number(orderprice.textContent);
								modbody.appendChild(div);
							}//--
							
						});
						
						
						
						
					}
					
					
				}
				
			});
		}		
	}
	
	
	
	
});
back.addEventListener('click', function(){//нажатие на кнопку пагинации back, отрезаются предыдущие от текущих 10 пунктов финального json файла и выводят их на экран, остальные функции такие же
	console.log(next.value);
	if(next.value>=2)
	{
		this.value=next.value;
		next.value = Number(this.value)-1;
		let pageNum = Number(next.value);
		let start = (pageNum - 1)* notesOnPage;
		let end = start + notesOnPage;
		let notes = finalres.slice(start, end);
		Table.innerHTML="";	
		let pick_but = document.getElementsByClassName('btn-outline-secondary 1')
		for (let note of notes){
			let row = document.createElement('div');
			row.className="row border border-dark rounded m-3";
			Table.appendChild(row);
			let col;	
			
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.name;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.typeObject;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.address;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right  text-center p-3";
			row.appendChild(col);
			let buttonn=document.createElement('button');
		    buttonn.id=note.id;
			buttonn.className="btn btn-outline-secondary 1";
			buttonn.innerHTML="Выбрать";
			col.appendChild(buttonn);
			console.log(buttonn.id);
			
			
			for(let pick_bu of pick_but){
				pick_bu.addEventListener('click',function(){
					let x = 0;
					if(this.id == note.id)
					{
						menuArea.innerHTML="";
						for(let unitdata1 of data1){
							let row = document.createElement('div');
							row.id="menurow"
							row.className="border border-dark rounded text-center";
							menuArea.appendChild(row);
							let col; 
							let img = document.createElement('img');
							img.src=unitdata1.img;
							row.appendChild(img);
							col = document.createElement('div');
							col.innerHTML=unitdata1.name;
							row.appendChild(col);
							col = document.createElement('div');
							row.appendChild(col);
							col = document.createElement('div');
							col.innerHTML=unitdata1.description;
							row.appendChild(col);
							x+=1;
							switch(x) {
								case 1:  
								col = document.createElement('div');
								col.innerHTML=note.set_1;
								row.appendChild(col);
								break;
								case 2:  
								col = document.createElement('div');
								col.innerHTML=note.set_2;
								row.appendChild(col);
								break;
								case 3:  
								col = document.createElement('div');
								col.innerHTML=note.set_3;
								row.appendChild(col);
								break;
								case 4:  
								col = document.createElement('div');
								col.innerHTML=note.set_4;
								row.appendChild(col);
								break;
								case 5:  
								col = document.createElement('div');
								col.innerHTML=note.set_5;
								row.appendChild(col);
								break;
								case 6:  
								col = document.createElement('div');
								col.innerHTML=note.set_6;
								row.appendChild(col);
								break;
								case 7:  
								col = document.createElement('div');
								col.innerHTML=note.set_7;
								row.appendChild(col);
								break;
								case 8:  
								col = document.createElement('div');
								col.innerHTML=note.set_8;
								row.appendChild(col);
								break;
								case 9:  
								col = document.createElement('div');
								col.innerHTML=note.set_9;
								row.appendChild(col);
								break;
								case 10:  
								
								col = document.createElement('div');
								col.innerHTML=note.set_10;
								row.appendChild(col);
								break;
							}
							
							let decre = document.createElement('button');
							decre.innerHTML='-';
							row.appendChild(decre);
							let input = document.createElement('input');
							input.className="minput";
							input.id="minput"
							input.value='0';
							row.appendChild(input);
							let incre = document.createElement('button');
							incre.innerHTML='+';
							row.appendChild(incre);
							incre.addEventListener('click',function(){
								
								input.value=Number(input.value)+1;
								console.log(col.textContent);
								op.innerHTML=Number(op.textContent)+Number(col.textContent);
								
							});
							
							
							decre.addEventListener('click',function(){
								if (Number(input.value)>=1)
								{
									op.innerHTML=Number(op.textContent)-Number(col.textContent);
									input.value=Number(input.value)-1;
									console.log(input.value);
									
									
								}
							});
							ob.addEventListener('click',function(){	
								let minputarr = document.getElementsByClassName('minput');
								let divname = document.getElementsByClassName('col name');
								modbody.innerHTML="";
								
								
								let span = document.createElement('span');
								span.innerHTML='Позиции заказа';
								modbody.appendChild(span);
								let div;
								console.log(minputarr);
								
								div = document.createElement('div');
								div.innerHTML='Название : '+note.name;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Округ : '+note.admArea;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Район : '+note.district;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Адрес : '+note.address;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Rate : '+note.rate;
								modbody.appendChild(div);
								if(firstcheck.checked)//условия для применения специальных выбранных услуг---------------------------------------------
							{
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Быстрая доствка  +20%"
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Итоговая цена : "+Number(orderprice.textContent)*0.9;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
							}
							else {
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML=Number(orderprice.textContent);
								modbody.appendChild(div);
							}//--
								
							});
							
							
							
							
						}
						
						
					}
					
				});
			}	
		}
	}
	else{//если это крайние 10 пунктов, то выводятся они же, функции аналогичные
		let notes = finalres.slice(0, 10);
		Table.innerHTML="";
		console.log(notes);
		let pick_but = document.getElementsByClassName('btn-outline-secondary 1')
		for (let note of notes){
			let row = document.createElement('div');
			row.className="row border border-dark rounded m-3";
			Table.appendChild(row);
			let col;	
			
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.name;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.typeObject;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right";
			col.innerHTML=note.address;
			row.appendChild(col);
			col=document.createElement('div');
			col.className="col border-right  text-center p-3";
			row.appendChild(col);
			let buttonn=document.createElement('button');
		    buttonn.id=note.id;
			buttonn.className="btn btn-outline-secondary 1";
			buttonn.innerHTML="Выбрать";
			col.appendChild(buttonn);
			console.log(buttonn.id);
			
			
			for(let pick_bu of pick_but){
				pick_bu.addEventListener('click',function(){
					let x = 0;
					if(this.id == note.id)
					{
						menuArea.innerHTML="";
						for(let unitdata1 of data1){
							let row = document.createElement('div');
							row.id="menurow"
							row.className="border border-dark rounded text-center";
							menuArea.appendChild(row);
							let col; 
							let img = document.createElement('img');
							img.src=unitdata1.img;
							row.appendChild(img);
							col = document.createElement('div');
							col.innerHTML=unitdata1.name;
							row.appendChild(col);
							col = document.createElement('div');
							row.appendChild(col);
							col = document.createElement('div');
							col.innerHTML=unitdata1.description;
							row.appendChild(col);
							x+=1;
							switch(x) {
								case 1:  
								col = document.createElement('div');
								col.innerHTML=note.set_1;
								row.appendChild(col);
								break;
								case 2:  
								col = document.createElement('div');
								col.innerHTML=note.set_2;
								row.appendChild(col);
								break;
								case 3:  
								col = document.createElement('div');
								col.innerHTML=note.set_3;
								row.appendChild(col);
								break;
								case 4:  
								col = document.createElement('div');
								col.innerHTML=note.set_4;
								row.appendChild(col);
								break;
								case 5:  
								col = document.createElement('div');
								col.innerHTML=note.set_5;
								row.appendChild(col);
								break;
								case 6:  
								col = document.createElement('div');
								col.innerHTML=note.set_6;
								row.appendChild(col);
								break;
								case 7:  
								col = document.createElement('div');
								col.innerHTML=note.set_7;
								row.appendChild(col);
								break;
								case 8:  
								col = document.createElement('div');
								col.innerHTML=note.set_8;
								row.appendChild(col);
								break;
								case 9:  
								col = document.createElement('div');
								col.innerHTML=note.set_9;
								row.appendChild(col);
								break;
								case 10:  
								
								col = document.createElement('div');
								col.innerHTML=note.set_10;
								row.appendChild(col);
								break;
							}
							
							let decre = document.createElement('button');
							decre.innerHTML='-';
							row.appendChild(decre);
							let input = document.createElement('input');
							input.className="minput";
							input.id="minput"
							input.value='0';
							row.appendChild(input);
							let incre = document.createElement('button');
							incre.innerHTML='+';
							row.appendChild(incre);
							incre.addEventListener('click',function(){
								
								input.value=Number(input.value)+1;
								console.log(col.textContent);
								op.innerHTML=Number(op.textContent)+Number(col.textContent);
								
							});
							
							
							decre.addEventListener('click',function(){
								if (Number(input.value)>=1)
								{
									op.innerHTML=Number(op.textContent)-Number(col.textContent);
									input.value=Number(input.value)-1;
									console.log(input.value);
									
									
								}
							});
							ob.addEventListener('click',function(){	
								let minputarr = document.getElementsByClassName('minput');
								let divname = document.getElementsByClassName('col name');
								modbody.innerHTML="";
								
								
								let span = document.createElement('span');
								span.innerHTML='Позиции заказа';
								modbody.appendChild(span);
								let div;
								console.log(minputarr);
							
								
								
								div = document.createElement('div');
								div.innerHTML='Название : '+note.name;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Округ : '+note.admArea;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Район : '+note.district;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Адрес : '+note.address;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML='Rate : '+note.rate;
								modbody.appendChild(div);
								if(firstcheck.checked)//условия для применения специальных выбранных услуг---------------------------------------------
							{
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Быстрая доствка  +20%"
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Итоговая цена : "+Number(orderprice.textContent)*0.9;
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
							}
							else {
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML="Доп опции"
								modbody.appendChild(div);
								div = document.createElement('div');
								div.innerHTML="Если ваш заказ приедет холодным, то он будет стоить: "+Number(orderprice.textContent)*0.7;
								modbody.appendChild(div);
								hr = document.createElement('hr');
								hr.className='featurette-divider';
								modbody.appendChild(hr);
								div = document.createElement('div');
								div.innerHTML=Number(orderprice.textContent);
								modbody.appendChild(div);
							}//--
								
							});
							
							
							
							
						}
						
						
					}
					
				});
			}	
		}
	}
});





getSecMessage();


