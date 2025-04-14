document.getElementById('btn').addEventListener('click',function(){
	let age=pareseInt(document.getElementById("age").value);
	let name=document.getElementById("name").value;
	
	// let prom = new Promise((resolve, reject)=>{
	// 	setTimeout(()=>{
	// 		if(age>18) resolve('y');
	// 		else if(age<18) resolve('n');
	// 	},4000)
	// })

	let prom  = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve();
			}
			else{
				reject();
			}
		},4000);
	})

	prom.then(()=> alert(`Welcome, ${name}. You can vote.`)).catch(()=>alert(`Oh sorry ${name}. You aren't old enough.`))
	
})

