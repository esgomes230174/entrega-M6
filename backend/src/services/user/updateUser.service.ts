import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/user.interfaces";

const updateUserService = async (
  id: string,
  user: IUserUpdate
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: user.name ? user.name : findUser.name,
    email: user.email ? user.email : findUser.email,
    cpf: user.cpf ? user.cpf : findUser.cpf,
    phone: user.phone ? user.phone : findUser.phone,
    birth_date: user.birth_date ? user.birth_date : findUser.birth_date,
    description: user.description ? user.description : findUser.description,
  });

  const updatedUser = await userRepository.findOneBy({
    id,
  });

  return updatedUser!;
};

export default updateUserService;
