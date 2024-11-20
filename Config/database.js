import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', '1234', {
// postgres: nome do banco de dados
// postgres: nome do usuário root
// 1234: senha do banco de dados
  host: 'localhost',
  dialect: 'postgres', //nome do banco de dados usado
  port: 5432 //porta que foi colocada quando criaram o banco de dados
});

export default sequelize;