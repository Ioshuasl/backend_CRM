import Cliente from "../Models/clienteModel.js";
import Venda from "../Models/vendaModel.js";
import Produto from "../Models/produtoModel.js";
import CategoriaProduto from "../Models/categoriaProdutoModel.js";
import FormaPagamento from "../Models/formaPagamentoModel.js";
import EstoqueProduto from "../Models/estoqueProdutoModel.js";

class Controller{

    //funcao para cadastrar novos clientes
    async createCliente(nomeCliente,cpfCliente,emailCliente){
        const cliente = await Cliente.create({nomeCliente,cpfCliente,emailCliente})
        return {message:"Cliente criado com sucesso:",cliente}
    }

    //funcao para mostrar todos os clientes
    async findAllClientes(){
        const clientes = Cliente.findAll()
        return clientes
    }

    //funcao para fazer update no cliente
    async updateCliente(id, updatedDataCliente){
        const cliente = await Cliente.update(updatedDataCliente, {where: id})
        return cliente
    }

    //funcao para excluir cliente
    async deleteCliente(id){
        const cliente = await Cliente.destroy({where:{id}})
        return {message:"Cliente deletado com sucesso",cliente}
    }

    //funcao para cadstrar novos produtos
    async createProduto(nomeProduto,estoqueProduto,valorProduto,categoriaProduto_id){
        const produto = await Produto.create({nomeProduto,valorProduto,categoriaProduto_id})

        await EstoqueProduto.create({
            produto_id: produto.id,
            quantidadeEstoqueProduto: estoqueProduto
        })
        return {message:"Produto criado com sucesso:",produto}
    }

    //funcao para mostrar todos os produtos
    async findAllProdutos(){
        const produtos = Produto.findAll({
            include:EstoqueProduto
        })
        return produtos
    }

    //funcao para fazer update em um produto
    async updateProduto(id, updatedDataProduto){
        const cliente = await Produto.update(updatedDataProduto, {where: id})
        return cliente
    }

    
    //funcao para deletar produto
    async deleteProduto(id){
        const produto = await Produto.destroy({where:{id}})
        await EstoqueProduto.destroy({where:{produto_id:id}})
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
    async updateCategoriaProduto(id, updatedDataCategoria){
        const categoriaProduto = await CategoriaProduto.update(updatedDataCategoria,{where:id})
    }

    //funcao para deletar uma categoria de produto
    async deleteCategoriaProduto(id){

        //antes de deletar precisa fazer uma funcao para verificar se nao tem nenhum Produto 
        //vinculado a aquela categoria de produto

        const categoriaProduto = await CategoriaProduto.destroy({where:{id}})
        return {message:"Categoria de produto deletado com sucesso"}
    }

    //funcao para cadastrar Forma de Pagamento
    async createFormaPagamento(nomeFormaPagamento){
        const formaPagamento = await FormaPagamento.create(nomeFormaPagamento)
        return {message:"Forma de pagamento criada com sucesso",formaPagamento}
    }

    //funcao para mostrar Formas de Pagamento cadastrado
    async findAllFormaPagamento(){
        const formaPagamentos = await FormaPagamento.findAll()
        return formaPagamentos
    }

    //funcao para dar update em Forma de Pagamento
    async updateFormaPagamento(id,updatedDataFormaPagamento){
        const formaPagamento = await FormaPagamento.update(updatedDataFormaPagamento,{where:id});
        return formaPagamento
    }

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
        const vendas = await Venda.findAll({include:[
            {model:Produto},
            {model:Cliente},
            {model:FormaPagamento}
        ]})
        return vendas
    }

    //funcao para dar update em Venda
    async updateVenda(id,updatedDataVenda){
        const venda = await Venda.update(updatedDataVenda,{where:id})
    }

    //funcao para deletar Venda
    async deleteVenda(id){
        const venda = await Venda.destroy({where:{id}})
        return {message:"Venda deletada com sucesso", venda}
    }

    //funcao para buscar todos os Produtos dependendo da CategoriaProduto
    async findAllProdutoByCategoriaProdutoId(categoriaProduto_id){
        const produtos = await Produto.findAll({where:{
            categoriaProduto_id: categoriaProduto_id
        }})
        return produtos
    }

    //funcao para buscar todas as Vendas com o id de um cliente tal
    async findVendasByCliente(id){
        const vendas = await Venda.findAll({
            where:{cliente_id:id},
            include: Cliente
        })
        return vendas
    }

    //funcao para vendas que usaram tal forma de pagamento
    async findVendasByFormaPagamentoid(id){
        const vendas = Venda.findAll({
            where:{formaPagamento_id:id},
            include:FormaPagamento
        })
        return vendas
    }

    //funcao para contar a quantidade total de clientes dentro do sistema
    async countClientes(){
        const totalClientes = Cliente.count()
        return totalClientes
    }
    
    //funcao para contar a quantidade total de produtos dentro do sistema
    async countProdutos(){
        const totalProdutos = Produto.count()
        return totalProdutos
    }

    
    
    //funcao para buscar a quantidade de venda de um produto tal
    //funcao para filtrar as vendas por data
    //funcao para dar o valor total obtido com as vendas
    //funcoes para dar o valor total obtido com as vendas a partir de alguns critérios
    //funcao para aumentar a quantidade de estoque de um produto
}

export default new Controller()