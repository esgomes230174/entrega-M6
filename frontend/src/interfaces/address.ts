export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IAddress extends IAddressRequest {
  id: string;
}
