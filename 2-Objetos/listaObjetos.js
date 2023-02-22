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

cliente.enderecos.push({
  rua: 'R. Joseph Ladder',
  numero: 404,
  apartamento: false,
});

console.log(cliente.enderecos);
console.log(cliente.enderecos[1]);

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);