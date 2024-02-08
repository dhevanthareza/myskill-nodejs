import sequelizeConnection from "./sequelizeConnection.js";
import { DataTypes } from "sequelize";

const User = sequelizeConnection.define(
  "User",
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { timestamps: false }
);

export default User;
