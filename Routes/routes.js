import Controller from "../Controller/controller.js";
import express, { Router } from "express";

const routes = express.Router()

routes.post('/createCliente',async (req,res)=> {

    const {nomeCliente,cpfCliente,emailCliente} = req.body;

    try {
        const cliente = await Controller.createCliente({nomeCliente,cpfCliente,emailCliente});
        return res.json(cliente)
    } catch (error) {
        return res.json(error)
    }
})

routes.get('findAllClientes',async(req,res) =>{
    
    try {
        const clientes = await Controller.findAllClientes()
        return res.json(clientes)
    } catch (error) {
        return res.json(error)
    }
})

routes.put('/updateCliente',async(req,res)=>{
    try {
        const cliente = await Controller.updateCliente(id, updatedData);
        return res.json(cliente);
    } catch (error) {
        return res.json(error)
    }
})

routes.delete('/deleteCliente/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const cliente = await Controller.deleteCliente({id});
        return res.json(cliente)
    } catch (error) {
        return res.json(error)
    }
})

routes.post('/createProduto',async (req,res) =>{
    const {nomeProduto,estoqueProduto,valorProduto,categoriaProduto_id} = req.body;

    try {
        const produto = await Controller.createProduto({nomeProduto,estoqueProduto,valorProduto,categoriaProduto_id})
        return res.json(produto)
    } catch (error) {
        return res.json(error)
    }
})

routes.get('/findAllProdutos', async (req,res) => {
    try {
        const produtos = await Controller.findAllProdutos();
        return res.json(produtos)
    } catch (error) {
        return res.json(error)
    }
})

routes.put('/updateProduto/:id', async (req,res) => {
    const {id} = req.params;
    try {
        const produto = await Controller.updateProduto({id, updatedData});
        return res.json(produto)
    } catch (error) {
        return res.json(error)
    }
})

routes.delete('/deleteProduto/:id', async (req,res) => {
    const {id} = req.params

    try {
        const produto = await Controller.deleteProduto({id});
        return res.json(produto)
    } catch (error) {
        
    }
})

routes.post('/createCategoriaProduto', async (req,res) => {
    const {nomeCategoria} = req.body

    try {
        const categoriaProduto = await Controller.createCategoriaProduto({nomeCategoria})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

routes.get('/findAllCategoriaProdutos', async (req,res) => {
    try {
        const categoriaproduto = await Controller.findAllCategoriaProdutos()
        return res.json(categoriaproduto)
    } catch (error) {
        return res.json(error)
    }
})

routes.put('/updateCategoriaProduto/:id', async (req,res) =>{
    const {id} = req.params

    try {
        const categoriaProduto = await Controller.updateCategoriaProduto({id})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

routes.delete('/deleteCategoriaProduto/:id', async (req,res) => {
    const {id} = req.params

    try {
        const categoriaProduto = await Controller.deleteCategoriaProduto({id})
        return res.json(categoriaProduto)
    } catch (error) {
        return res.json(error)
    }
})

routes.post('/createFormaPagamento ', async (req,res) =>{
    const {nomeFormaPagamento} = req.body

    try {
        const formaPagamento = await Controller.createFormaPagamento({nomeFormaPagamento});
        return res.json(formaPagamento)
    } catch (error) {
        return res.json(error)
    }
})

routes.get('/findAllFormaPagamento',async (req,res) =>{
    try {
        const formaPagamentos = await Controller.findAllFormaPagamento()
        return res.json(formaPagamentos)
    } catch (error) {
        return res.json(error)
    }
})

routes.put('/updateFormaPagamento/:id', async(req,res) =>{
    const {id} = req.params

    try {
        const formaPagamento = await Controller.updateFormaPagamento({updatedData,id});
        return res.json(formaPagamento);
    } catch (error) {
        return res.json(error);
    }
})

routes.delete('/deleteFormaPagamento/:id', async(req,res) =>{
    const {id} = req.params

    try {
        const formaPagamento = await Controller.deleteFormaPagamento({id});
        return res.json(formaPagamento)
    } catch (error) {
        return res.json(error)
    }
})