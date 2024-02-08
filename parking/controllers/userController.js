import User from "../../sequelize/model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export default class UserController {
  static async store(req, res) {
    console.log(req.body);
    let { username, email, password } = req.body;
    password = bcrypt.hashSync("secret", 8);
    const user = await User.create({ username, password, email });
    res.json(user);
  }
  static async get(req, res) {
    const users = await User.findAll();
    res.json(users);
  }

  static async detail(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  }

  static async update(req, res) {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    res.json(user);
  }

  static async delete(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.json(user);
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email: username }],
        },
      });
      if (!user) {
        return res.status(401).json({ error: "Authentication failed" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Authentication failed" });
      }
      const token = jwt.sign({ userId: user.id }, "secret", {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  }

  static async me(req, res) {
    const userId = req.userId;
    const user = await User.findOne({ where: { id: userId } });
    res.json(user);
  }
}
