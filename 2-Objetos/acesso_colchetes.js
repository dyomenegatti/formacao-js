const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '11122233344',
    email: 'andre@email.com.br'
}

console.log(cliente);
console.log(cliente["nome"]);
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});