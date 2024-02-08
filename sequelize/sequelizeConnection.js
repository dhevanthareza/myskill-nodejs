import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("parking", "root", "dhevan007", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelizeConnection;
