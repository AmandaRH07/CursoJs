function saudacao(nome) {
    // console.log(`Bom dia ${nome}.`);
    // return 123456;
    return `Bom dia ${nome}.`
}

saudacao("Amanda");
saudacao("Gabriel");

const retorno = saudacao("ana");
console.log(retorno);

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(3,6));
console.log(soma(10,5));

const resultado = soma(4, 7);
console.log(resultado);

function subtracao(x = 10, y = 1){
    const resultado = x - y;
    return resultado;
}

console.log(subtracao());

// const raiz = function (n){
//      return n ** 0.5;
// };


const raiz = n => n ** 0.5;



console.log(raiz(9));