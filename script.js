//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function(){
	let name= document.getElementById('name').value;
    let age=document.getElementById('age').value;

	let proms = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18){
				return resolve({data:true})
			}
			else{
				return reject({data:false})
			}
		},4000);
	})

	proms.then((data)=>{
	alert(`Welcome, ${name}. You can vote.`);
}).catch((error)=>{
	alert(`Oh sorry ${name}. You aren't old enough.`);
});
})

