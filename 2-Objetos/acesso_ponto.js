const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '11122233344',
    email: 'andre@email.com.br'
}

console.log(cliente);
console.log(cliente.nome);
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`)