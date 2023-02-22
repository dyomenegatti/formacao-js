const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@email.com.br",
  telefone: ["2155887799","114444440"],
};

cliente.enderecos = [
  {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
  },
];

for(let chave in cliente) {
  let tipo = typeof cliente[chave];
  if(tipo !== 'object' && tipo !== 'function') {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
  }
};