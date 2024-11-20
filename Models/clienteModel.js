import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

// Define o modelo Cliente
const Cliente = sequelize.define('Cliente', {
  nomeCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpfCliente: {
    type: DataTypes.STRING,
  },
  emailCliente: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'clientes',  // Mapeia para a tabela 'clientes' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default Cliente;