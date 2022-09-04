const pessoa = {
    nome: 'Otavio',
    sobrenome: 'Souza',
    idade: 23,

    fala (){
        console.log(`${this.nome} ${this.sobrenome} está falando Olá mundo`)
    }
};

console.log(pessoa.nome);
pessoa.fala();

function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Otavio', 'Souza', '32');
const pessoa2 = criaPessoa('Paula', 'Oliveira', '32');
const pessoa3 = criaPessoa('Roberto', 'Leal', '12');

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);

