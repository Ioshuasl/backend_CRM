import Cliente from "../Models/clienteModel.js";
import Venda from "../Models/vendaModel.js";
import Produto from "../Models/produtoModel.js";
import CategoriaProduto from "../Models/categoriaProdutoModel.js";

class Controller{

    //função para cadastrar novos clientes
    async createCliente(nomeCliente,cpfCliente,emailCliente){
        const cliente = await Cliente.create(nomeCliente,cpfCliente,emailCliente)
        return {message:"Cliente criado com sucesso:",cliente}
    }

    //função para mostrar todos os clientes
    async getClientes(){
        const clientes = Cliente.findAll()
        return clientes
    }

    //função para cadstrar novos produtos
    async createProduto(nomeProduto,quantidadeEstoqueProduto,valorProduto,categoriaProduto_id){
        const produto = await Produto.create(nomeProduto,quantidadeEstoqueProduto,valorProduto,categoriaProduto_id)
        return {message:"Produto criado com sucesso:",produto}
    }

    //função para mostrar todos os produtos
    async getProdutos(){
        const produtos = Produto.findAll()
        return produtos
    }

    //função para dastrar categoria para classificar produtos
    async createCategoriaProduto(nomeCategoria){
        const categoriaProduto = await CategoriaProduto.create(nomeCategoria)
        return {message:"Categoria do produto criado com sucesso:",categoriaProduto}
    }

    //função para mostrar todas as categorias de produtos criados
    async getCategoriaProdutos(){
        const categoriaProdutos = await CategoriaProduto.findAll()
        return categoriaProdutos
    }
}

export default new Controller()