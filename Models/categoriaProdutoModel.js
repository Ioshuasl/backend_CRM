import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

// Define o modelo CategoriaProduto
const CategoriaProduto = sequelize.define('CategoriaProduto', {
  nomeCategoria: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'categoriaProdutos',  // Mapeia para a tabela 'categoriaProdutos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default CategoriaProduto;