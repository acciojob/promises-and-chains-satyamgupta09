document.getElementById("btn").addEventListener('click', function(){
	let age = document.getElementById('age').value;
	let name = document.getElementById('name').value;

	let proms = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve("y");
			}
			else{
				resolve("n");
			}
		},4000);
	})

	proms.then((data)=> data=="y" ? alert('Welcome, . You can vote.') : alert(`Oh sorry . You aren't old enough.`)).catch();
})