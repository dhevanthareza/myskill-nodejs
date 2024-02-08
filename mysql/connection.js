import { createPool } from "mysql2";

const connection = createPool({
  host: "127.0.0.1",
  user: "root",
  password: "secret",
  port: "3306",
  database: "parking"
});

export default connection;
