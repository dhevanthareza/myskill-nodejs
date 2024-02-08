import connection from "./connection.js";
import bcrypt from "bcrypt";

const create = (username, email, password) => {
  connection.query(
    `INSERT INTO users(username, email, password) VALUES ('${username}', '${email}', '${password}')`,
    (_, rows, __) => {
      console.log(rows);
    }
  );
};

const username = "dhevan";
const email = "dhevan@dinustek.com";
const password = bcrypt.hashSync("secret", 10);

create(username, email, password);
