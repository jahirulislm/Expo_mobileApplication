import User from "../models/User";

import { AES } from "crypto";
import jwt from "jwt";

export async function createUser(req, res, next) {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: AES.encypt,
  });
}
