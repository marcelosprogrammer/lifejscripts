console.log("Reutilizando Códigos JS")

// Utilizando Arrays 

var matriz = [10,29,49,0]
matriz.push(34)
matriz.push(89)

for(let j = 0; j < matriz.length; j++){
	console.log(matriz[j])
}
console.log("   ")

for (let h in matriz){
	console.log(matriz[h])
}

console.log(" -------------------------- ")

matriz.map(k => console.log(k))

console.log(" -------------------------- ")

matriz.map(function(l){
	console.log(l)
});