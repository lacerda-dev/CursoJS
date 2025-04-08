let num = [5,8,2,9,3]


num.sort()
num.push(1)
console.log(num)
console.log(`Nosso array tem ${num.length} posições`)
console.log(`O primeiro valor do meu array é ${num[3]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)


/*let valores = [8,1,7,4,2,9]

for(let pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

/* let valores = [8,1,7,4,2,9]

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
} */