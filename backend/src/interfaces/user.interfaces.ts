import { IAddress } from "./address.interfaces";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  account: string;
  password: string;
  address: IAddress;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
}
