/*
Primitivos (imutáveis): string, number, boolean, undefined, null, bigint, symbol - valores 'copiados'
Refeferência (mutável): aray, object, function - valores passados por referência(aponta para o mesmo valor na memória)
*/ 

let a = [1,2,3]
let b = [...a]; /*a foi copiado para b*/
let c = b; 

console.log(a, b, c)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

c.push("Ana")
console.log(a, c)


const d = {
  nome: "Pedro", 
  sobrenome: "Henrique"
}
const e = {...d};

d.nome = "João"
console.log(e);
console.log(d);
