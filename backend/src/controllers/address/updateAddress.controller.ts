import { Request, Response } from "express";
import { IAddressUpdate } from "../../interfaces/address.interfaces";
import updateAddressService from "../../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newAddress: IAddressUpdate = req.body;

  const updateAddress = await updateAddressService(id, newAddress);

  return res.status(200).json(updateAddress);
};

export default updateAddressController;
