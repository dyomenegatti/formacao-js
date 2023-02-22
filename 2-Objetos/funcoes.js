const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@email.com.br",
  telefone: ["2155887799","114444440"],
  saldo: 200,
  efetuaPagamento: function(valor) {
    if(valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo salvo: ${this.saldo}`)
    }
  }
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);