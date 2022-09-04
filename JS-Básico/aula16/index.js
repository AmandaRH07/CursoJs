const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[1]);
console.log(alunos.length);

alunos[0] = 'Eduardo';

// adicionar ao final do array 
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';

// função para adicionar ao final do array
alunos.push('Antonia');

// adicionar no início
alunos.unshift('Mariana');
console.log(alunos);

// remover o ultimo
let removido = alunos.pop();
console.log(removido);

// remove o primeiro
removido = alunos.shift();
console.log(removido);

console.log(alunos);

console.log(alunos.slice(0, -2));
console.log(typeof alunos);