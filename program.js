let number = prompt("Введите число");

if (number.length > 3) 
	console.log("Число больше 999");
else {
	let obj = {
		ed: number[2],
		des:number[1],
		sot:number[0]
	}
	console.log(obj.sot);
	console.log(obj.des);	
	console.log(obj.ed);	
}
