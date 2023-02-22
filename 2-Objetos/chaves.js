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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
};
