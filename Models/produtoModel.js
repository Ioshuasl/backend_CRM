import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import CategoriaProduto from "./categoriaProdutoModel.js";

// Define o modelo Produto
const Produto = sequelize.define('Produto', {
  nomeProduto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidadeEstoqueProduto: {
    type: DataTypes.INTEGER,
  },
  valorProduto: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  categoriaProduto_id: {
    type: DataTypes.INTEGER,
    references: {
        model: CategoriaProduto,
        key: 'id',
    },
    allowNull: false
  }
}, {
  tableName: 'produtos',  // Mapeia para a tabela 'produtos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default Produto;