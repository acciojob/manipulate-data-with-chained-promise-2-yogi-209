//your JS code here. If required.
function manipulatData(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
		resolve([1,2,3,4]);
	},3000);
	})
	.then((arr)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const evenNumber=arr.filter((num)=>num%2==0);
				document.getElementById("output").innerText=evenNumber.join(",");
				resolve(evenNumber);
			},1000);
		});
	})
	.then((evenNumbers)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const multipliedNumbers=evenNumbers.map((num)=>num*2);
				document.getElementById("output").innerText=multipliedNumbers.join(",");
			},2000);
		});
	});
}

manipulatData();

