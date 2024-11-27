//arquivo usado para fazer todos os testes do sistema

class Cliente{
    constructor(nomeCliente, cpfCliente, emailCliente){
        this.nomeCliente = nomeCliente
        this.cpfCliente = cpfCliente
        this.emailCliente = emailCliente
    }
}

class Produto{
    constructor(nomeProduto,estoqueProduto, valorProduto, descricaoProduto){
        this.nomeProduto = nomeProduto
        this.estoqueProduto = estoqueProduto
        this.valorProduto = valorProduto
        this.descricaoProduto = descricaoProduto
    }
}

class FormaPagamento{
    constructor(nomeFormaPagamento){
        this.nomeFormaPagamento = nomeFormaPagamento
    }
}

class Venda{
    constructor(indexCliente, indexProduto, indexFormaPagamento){
        this.indexCliente = indexCliente;
        this.indexProduto = indexProduto;
        this.indexFormaPagamento = indexFormaPagamento;
    }
}

class Controller {
    constructor(){
        this.clientes = [];
        this.vendas = [];
        this.formaPagamentos = [];
        this.produtos = [];
        this.vendas = [];
    }

    cadastrarcliente(nomeCliente, cpfCliente, emailCliente){
        const cliente = new Cliente(nomeCliente, cpfCliente, emailCliente);
        this.clientes.push(cliente);
        return cliente
    }

    cadastrarProduto(nomeProduto,estoqueProduto, valorProduto, descricaoProduto){
        const produto = new Produto(nomeProduto,estoqueProduto, valorProduto, descricaoProduto);
        this.produtos.push(produto);
        return produto
    }

    cadastrarFormaPagamento(nomeFormaPagamento){
        const formaPagamento = new FormaPagamento(nomeFormaPagamento);
        this.formaPagamentos.push(formaPagamento);
        return formaPagamento
    }

    cadastrarVenda(indexCliente, indexProduto, indexFormaPagamento){
        const cliente = this.clientes[indexCliente]
        const produto = this.produtos[indexProduto]
        const formaPagamento = this.formaPagamentos[indexFormaPagamento]

        const venda = new Venda(cliente,produto,formaPagamento)
        this.vendas.push(venda)
        return venda
    }
}

let controller = new Controller()
controller.cadastrarcliente('ioshua','04353094122','ioshua@gmail.com')
controller.cadastrarProduto('notebook ryzen 7',10,'2599,99','descricao')
controller.cadastrarFormaPagamento('pix')
controller.cadastrarFormaPagamento('debito')
controller.cadastrarFormaPagamento('boleto')
controller.cadastrarFormaPagamento('credito')
controller.cadastrarVenda(0,0,0)

console.log(controller.vendas)
