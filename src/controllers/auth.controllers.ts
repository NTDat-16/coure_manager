import { Request, Response } from "express";
import * as AuthService from "../services/auth.services.js";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const { username, password } = req.body;

    const user =
      await AuthService.registerService(
        username,
        password
      );

    res.status(201).json(user);

  } catch (error: any) {

    res.status(400).json({
      message: error.message,
    });

  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {

    const { username, password } = req.body;

    const token =
      await AuthService.loginService(
        username,
        password
      );

    res.status(200).json({
      accessToken: token,
    });

  } catch (error: any) {

    res.status(401).json({
      message: error.message,
    });

  }
}