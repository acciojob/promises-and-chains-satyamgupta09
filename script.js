document.getElementById('btn').addEventListener('click',function(){
	let age=pareseInt(document.getElementById("age").value);
	let name=document.getElementById("name").value;
	
	let prom  = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve({data:'y'});
			}
			else{
				reject({data:'n'})
			}
		},4000);
	})
	prom.then((data)=> data=='y' ? alert(`Welcome, ${name}. You can vote.`) : alert(`Oh sorry ${name}. You aren't old enough.`))
	
})

