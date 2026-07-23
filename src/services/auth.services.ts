import bcrypt from "bcrypt";
import jwt, { type SignOptions } from "jsonwebtoken";

import * as AuthModel from "../models/auth.models.js";

export async function registerService(
  username: string,
  password: string
) {
  const existed =
    await AuthModel.findUserByUsername(username);

  if (existed) {
    throw new Error("Username already exists");
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  return AuthModel.createUser(
    username,
    hashedPassword
  );
}

export async function loginService(
  username: string,
  password: string
) {
  const user =
    await AuthModel.findUserByUsername(username);

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const matched =
    await bcrypt.compare(password, user.password);

  if (!matched) {
    throw new Error("Invalid username or password");
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  const expiresIn: SignOptions["expiresIn"] =
    (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) ?? "1h";

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    jwtSecret,
    {
      expiresIn,
    }
  );

  return token;
}