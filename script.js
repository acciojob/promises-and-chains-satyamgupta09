document.getElementById('btn').addEventListener('click',function(){
	let age=(document.getElementById("age").value);
	let name=document.getElementById("name").value;
	
	let prom = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18) resolve("y");
			else if(age<18) reject("n");
		},4000);
	});

	prom.then((data)=> data=='y' ? alert(`Welcome, ${name}. You can vote.`) : null).catch(alert(`Oh sorry ${name}. You aren't old enough.`));
	
})

