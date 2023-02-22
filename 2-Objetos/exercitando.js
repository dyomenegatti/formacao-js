const clientes = require("./exercitando.json");

//encontrando um objeto
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);

//filtrando objetos
function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento"))
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);
console.log(filtrados);

//ordenando objetos
function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    })
    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");
console.log(ordenadoNome);