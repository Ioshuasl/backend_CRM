import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import Produto from "./produtoModel.js";

// Define o modelo EstoqueProduto
const EstoqueProduto = sequelize.define('EstoqueProduto', {
  produto_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Produto,
        key: 'id',
    },
    allowNull: false,
  },
  quantidadeEstoqueProduto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valorProduto: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  }
}, {
  tableName: 'estoqueProdutos',  // Mapeia para a tabela 'estoqueProdutos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

EstoqueProduto.belongsTo(Produto,{foreignKey: produto_id})

export default EstoqueProduto;