import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

// Define o modelo FormaPagamento
const FormaPagamento = sequelize.define('FormaPagamento', {
  nomeFormaPagamento: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'formaPagamentos',  // Mapeia para a tabela 'formaPagamentos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default FormaPagamento;