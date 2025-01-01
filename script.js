//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function(){
	let name= document.getElementById('name').value;
    let age=document.getElementById('age').value;

	let proms = new Promise((resolve, reject)=>{
		setInterval(()=>{
			if(age>18) resolve({data:true});
			else reject({data:false});
		},4000);
	});

	proms.then((data)=>{
	alert(`Welcome, ${name}. You can vote.`);
}).catch((error)=>{
	alert(`Oh sorry ${name}. You aren't old enough.`);
});
})

