import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";
import { hash } from "bcryptjs";

const resetPasswordService = async (
  email: string,
  token: string,
  password: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not registered", 404);
  }

  if (token !== user.passwordResetToken) {
    throw new AppError("Invalid reset token", 400);
  }

  const now = new Date();

  if (now > user.passwordResetExpires) {
    throw new AppError("Reset token expired", 400);
  }

  await userRepository.update(user.id, {
    password: await hash(password, 10),
  });
};

export default resetPasswordService;
