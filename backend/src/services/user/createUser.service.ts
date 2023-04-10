import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { IAddress } from "../../interfaces/address.interfaces";
import { IUser, IUserRequest } from "../../interfaces/user.interfaces";

const createUserService = async (
  user: IUserRequest,
  address: IAddress
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const userAddress: IAddress = addressRepository.create(address);
  await addressRepository.save(userAddress);

  const newUser: IUser = userRepository.create(user);

  newUser.password = await hash(user.password, 10);
  newUser.address = userAddress;

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
