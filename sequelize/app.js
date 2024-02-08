import User from "./model/User.js";
import bcrypt from "bcrypt";

const create = async () => {
  const username = "dhevan";
  const email = "dhevan@dinustek.com";
  const password = bcrypt.hashSync("secret", 8);
  const user = await User.create({ username, password, email });
  console.log(user);
};

const update = async () => {
  const update = await User.update(
    { username: "dhevan_updated" },
    { where: { id: 5 } }
  );
  console.log(update);
};

const read = async () => {
  const users = await User.findAll();
  console.log(users.dataValues);
};

const deleteData = async () => {
  const deleted = await User.destroy({ where: { id: 5 } });
  console.log(deleted);
};

// create();
// update();
// read();
// deleteData();
