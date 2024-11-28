import Cliente from "../Models/clienteModel.js";
import Venda from "../Models/vendaModel.js";
import Produto from "../Models/produtoModel.js";
import CategoriaProduto from "../Models/categoriaProdutoModel.js";
import FormaPagamento from "../Models/formaPagamentoModel.js";

class Controller{

    //funcao para cadastrar novos clientes
    async createCliente(nomeCliente,cpfCliente,emailCliente){
        const cliente = await Cliente.create(nomeCliente,cpfCliente,emailCliente)
        return {message:"Cliente criado com sucesso:",cliente}
    }

    //funcao para mostrar todos os clientes
    async findAllClientes(){
        const clientes = Cliente.findAll()
        return clientes
    }

    //funcao para fazer update no cliente

    //funcao para excluir cliente
    async deleteCliente(id){
        const cliente = await Cliente.destroy({where:{id}})
        return {message:"Cliente deletado com sucesso",cliente}
    }

    //funcao para cadstrar novos produtos
    async createProduto(nomeProduto,quantidadeEstoqueProduto,valorProduto,categoriaProduto_id){
        const produto = await Produto.create(nomeProduto,quantidadeEstoqueProduto,valorProduto,categoriaProduto_id)
        return {message:"Produto criado com sucesso:",produto}
    }

    //funcao para mostrar todos os produtos
    async findAllProdutos(){
        const produtos = Produto.findAll()
        return produtos
    }

    //funcao para fazer update em um produto
    
    //funcao para deletar produto
    async deleteProduto(id){
        const produto = await Produto.destroy({where:{id}})
        return {message:"Produto deletado com sucesso",produto}
    }

    //funcao para cadastrar categoria de produtos
    async createCategoriaProduto(nomeCategoria){
        const categoriaProduto = await CategoriaProduto.create(nomeCategoria)
        return {message:"Categoria do produto criado com sucesso:",categoriaProduto}
    }

    //funcao para mostrar todas as categorias de produtos criados
    async findAllCategoriaProdutos(){
        const categoriaProdutos = await CategoriaProduto.findAll()
        return categoriaProdutos
    }

    //funcao para dar update em uma categoria de produto

    //funcao para deletar uma categoria de produto
    async deleteCategoriaProduto(id){

        //antes de deletar precisa fazer uma funcao para verificar se nao tem nenhum Produto 
        //vinculado a aquela categoria de produto

        const categoriaProduto = CategoriaProduto.destroy({where:{id}})
        return {message:"Categoria de produto deletado com sucesso"}
    }

    //funcao para cadastrar Forma de Pagamento
    async createFormaPagamento(nomeFormaPagamento){
        const formaPagamento = FormaPagamento.create(nomeFormaPagamento)
        return {message:"Forma de pagamento criada com sucesso"}
    }

    //funcao para mostrar Formas de Pagamento cadastrado
    async findAllFormaPagamento(){
        const formaPagamentos = FormaPagamento.findAll()
        return formaPagamentos
    }

    //funcao para dar update em Forma de Pagamento

    //funcao para deletar Forma de Pagamento
    async deleteFormaPagamento(id){
        const formaPagamento = await FormaPagamento.destroy({where:{id}})
        return {message:"forma de pagemnto deletado com sucesso",formaPagamento}
    }


    //funcao para cadastrar Venda
    async createVenda(produto_id, cliente_id, valorPago, formaPagamento_id){
        const venda = await Venda.create(produto_id, cliente_id, valorPago, formaPagamento_id)
        return {message:"Venda criada com sucesso", venda}
    }

    //funcao para mostrar Vendas cadastrado
    async findAllVendas(){
        const vendas = await Venda.findAll()
        return vendas
    }

    //funcao para dar update em Venda

    //funcao para deletar Venda
    async deleteVenda(id){
        const venda = await Venda.destroy({where:{id}})
        return {message:"Venda deletada com sucesso", venda}
    }

    //funcao para buscar todos os Produtos dependendo da CategoriaProduto
    //precisa criar uma tabela de estoque que referencia um produto, vai ser mais facil para programar tendo uma tabela para estoque para cada produto
    //funcao para buscar todas as Vendas com o id de um cliente tal
    //funcao para buscar a quantidade de venda de um produto tal
}

export default new Controller()