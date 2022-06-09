//Método para criar pessoas

function criarPessoas(nome,idade){
    return {
        nome,
        idade
    }
}

//Array para armazenar as pessoas

let pessoas = [
    criarPessoas("Joana",41),
    criarPessoas("João",22),
    criarPessoas("Murilo",15),
    criarPessoas("Esmael",22)
]

//Callback Map
function informePessoas(pessoa){
    return console.log(`Nome: ${pessoa.nome} idade: ${pessoa.idade} `);
}


//Novo Array Map
let pessoasMapeadas = pessoas.map(informePessoas);

console.log(pessoasMapeadas);