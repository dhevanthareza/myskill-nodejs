import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("parking", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelizeConnection;
