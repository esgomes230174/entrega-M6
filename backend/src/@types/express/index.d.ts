import * as express from "express";
import { IAddress } from "../../interfaces/address.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}
