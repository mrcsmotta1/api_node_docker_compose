import express from "express";
// const qr = require("qr-image");
import { UserModel } from "../models/User";

export default {
  async list(req, res) {
    try {
      const users = await UserModel.find();
      console.log("user: ", users);
      return users.length === 0
        ? res.status(404).json({ message: "Part not found" })
        : res.status(200).send({ doc: users });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: "Selection failed" });
    }
  },
};
