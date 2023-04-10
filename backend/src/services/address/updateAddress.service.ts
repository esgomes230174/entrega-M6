import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IAddress, IAddressUpdate } from "../../interfaces/address.interfaces";
import { Address } from "../../entities/address.entity";

const updateAddressService = async (
  id: string,
  address: IAddressUpdate
): Promise<IAddress> => {
  const addressRepository = AppDataSource.getRepository(Address);
  const findAddress = await addressRepository.findOneBy({ id });

  if (!findAddress) {
    throw new AppError("Address not found", 404);
  }

  await addressRepository.update(id, {
    cep: address.cep ? address.cep : findAddress.cep,
    state: address.state ? address.state : findAddress.state,
    city: address.city ? address.city : findAddress.city,
    street: address.street ? address.street : findAddress.street,
    number: address.number ? address.number : findAddress.number,
    complement: address.complement
      ? address.complement
      : findAddress.complement,
  });
  const updatedAddress = await addressRepository.findOneBy({
    id,
  });

  return updatedAddress!;
};

export default updateAddressService;
