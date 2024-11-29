import Controller from "../Controller/controller.js";
import express, { Router } from "express";

const routes = express.Router()

//rota http para criar cliente
routes.post('/createCliente',async (req,res)=> {

    const {nomeCliente,cpfCliente,emailCliente} = req.body;

    try {
        const cliente = await Controller.createCliente({nomeCliente,cpfCliente,emailCliente});
        return res.json(cliente)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para mostrar clientes
routes.get('findAllClientes',async(req,res) =>{
    
    try {
        const clientes = await Controller.findAllClientes()
        return res.json(clientes)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para fazer upload no cliente
routes.put('/updateCliente',async(req,res)=>{
    try {
        const cliente = await Controller.updateCliente(id, updatedData);
        return res.json(cliente);
    } catch (error) {
        return res.json(error)
    }
})

//rota http para deletar cliente
routes.delete('/deleteCliente/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const cliente = await Controller.deleteCliente({id});
        return res.json(cliente)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para criar produto
routes.post('/createProduto',async (req,res) =>{
    const {nomeProduto,estoqueProduto,valorProduto,categoriaProduto_id} = req.body;

    try {
        const produto = await Controller.createProduto({nomeProduto,estoqueProduto,valorProduto,categoriaProduto_id})
        return res.json(produto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para mostrar todos produtos
routes.get('/findAllProdutos', async (req,res) => {
    try {
        const produtos = await Controller.findAllProdutos();
        return res.json(produtos)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para fazer update no produto
routes.put('/updateProduto/:id', async (req,res) => {
    const {id} = req.params;
    try {
        const produto = await Controller.updateProduto({id, updatedData});
        return res.json(produto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para deletar produto
routes.delete('/deleteProduto/:id', async (req,res) => {
    const {id} = req.params

    try {
        const produto = await Controller.deleteProduto({id});
        return res.json(produto)
    } catch (error) {
        
    }
})

//rota http para criar categoria de produto
routes.post('/createCategoriaProduto', async (req,res) => {
    const {nomeCategoria} = req.body

    try {
        const categoriaProduto = await Controller.createCategoriaProduto({nomeCategoria})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para mostrar todas as categorias de produto
routes.get('/findAllCategoriaProdutos', async (req,res) => {
    try {
        const categoriaproduto = await Controller.findAllCategoriaProdutos()
        return res.json(categoriaproduto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para fazer update na categoria de produto
routes.put('/updateCategoriaProduto/:id', async (req,res) =>{
    const {id} = req.params

    try {
        const categoriaProduto = await Controller.updateCategoriaProduto({id})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para deletar categoria de produto
routes.delete('/deleteCategoriaProduto/:id', async (req,res) => {
    const {id} = req.params

    try {
        const categoriaProduto = await Controller.deleteCategoriaProduto({id})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para criar forma de pagamento
routes.post('/createFormaPagamento ', async (req,res) =>{
    const {nomeFormaPagamento} = req.body

    try {
        const formaPagamento = await Controller.createFormaPagamento({nomeFormaPagamento});
        return res.json(formaPagamento)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para mostrar todas as formas de pagamento
routes.get('/findAllFormaPagamento',async (req,res) =>{
    try {
        const formaPagamentos = await Controller.findAllFormaPagamento()
        return res.json(formaPagamentos)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para fazer update na forma de pagamento
routes.put('/updateFormaPagamento/:id', async(req,res) =>{
    const {id} = req.params

    try {
        const formaPagamento = await Controller.updateFormaPagamento({updatedData,id});
        return res.json(formaPagamento);
    } catch (error) {
        return res.json(error);
    }
})

//rota http para deletar forma de pagamento
routes.delete('/deleteFormaPagamento/:id', async(req,res) =>{
    const {id} = req.params

    try {
        const formaPagamento = await Controller.deleteFormaPagamento({id});
        return res.json(formaPagamento)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para criar venda
routes.post('/createVenda', async(req,res) =>{
    const {produto_id, cliente_id, valorPago, formaPagamento_id} = req.body

    try {
        const venda = await Controller.createVenda({produto_id, cliente_id, valorPago, formaPagamento_id});
        return res.json(venda)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para mostrar todas as vendas
routes.get('/findAllVendas', async (req,res)=>{
    try {
        const vendas = await Controller.findAllVendas();
        return res.json(vendas)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para fazer update na venda
routes.put('/updateVenda/:id', async(req,res) =>{
    const {id} = req.params;

    try {
        const venda = await Controller.updateVenda({id});
        return res.json(venda)
    } catch (error) {
        return res.json(error)
    }
})

//rota http para deletar venda
routes.delete('/deleteVenda/:id', async(req,res)=>{
    const {id} = req.params

    try {
        const venda = await Controller.deleteVenda({id});
        return res.json(venda)
    } catch (error) {
        return res.json(error)
    }
})