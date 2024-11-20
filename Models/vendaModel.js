import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import Produto from "./produtoModel.js";
import Cliente from "./clienteModel.js";
import FormaPagamento from "./formaPagamentoModel.js";

// Define o modelo Venda
const Venda = sequelize.define('Venda', {
  produto_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Produto,
        key: 'id',
    },
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Cliente,
        key: 'id',
    },
    allowNull: false
  },
  valorPago: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  formaPagamento_id: {
    type: DataTypes.INTEGER,
    references:{
        model:FormaPagamento,
        key:'id'
    },
    allowNull:false
  }
}, {
  tableName: 'vendas',  // Mapeia para a tabela 'vendas' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default Venda;