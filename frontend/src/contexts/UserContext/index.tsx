import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IAddress } from "../../interfaces/address";
import {
  IPasswordReset,
  IUser,
  IUserContext,
  IUserLogin,
  IUserLoginResponse,
  IUserProviderProps,
  IUserRequest,
  IUserUpdate,
} from "../../interfaces/user";
import api from "../../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [modalAddress, setAddressModal] = useState<boolean>(false);
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);
  const [forgotPasswordModal, setForgotPasswordModal] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const registerUser = async (data: IUserRequest) => {
    await api
      .post<IUser>("/users", data)
      .then(() => {
        setRegisterModal(true);
      })
      .catch(() => {
        toast.error("Ops! Email já cadastrado");
      });
  };

  const loginUser = async (data: IUserLogin) => {
    await api
      .post<IUserLoginResponse>("/login", data)
      .then(({ data }) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        getUserProfile();

        localStorage.clear();
        localStorage.setItem("@user:token", data.token);

        toast.success("Login efetuado com sucesso!");

        navigate("/home", { replace: true });
      })
      .catch(() => {
        toast.error("Ops! Email e/ou senha incorretos");
      });
  };

  const getUserProfile = async () => {
    await api.get<IUser>("/users/profile").then((res) => {
      setUser(res.data);

      localStorage.setItem("@user:id", res.data.id);
      localStorage.setItem("@user:name", res.data.name);
      localStorage.setItem("@user:account", res.data.account);
    });
  };

  const getUserById = async (userId: string) => {
    await api
      .get<IUser>(`/users/${userId}`)
      .then((res) => {
        setSelectedUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editAddress = async (data: IAddress) => {
    await api
      .patch(`/address/${user?.address.id}`, data)
      .then(() => {
        setAddressModal(false);
        toast.success("Endereço atualizado!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editUser = async (data: IUserUpdate) => {
    await api
      .patch<IUser>("/users", data)
      .then(() => {
        setEditUserModal(false);
        toast.success("Perfil atualizado!");
        getUserProfile();
      })
      .catch(() => {
        toast.error("Ops! Este email já está cadastrado em outra conta");
      });
  };

  const deleteUser = async () => {
    await api
      .delete<IUser>("/users")
      .then(() => {
        setDeleteUserModal(false);
        toast.success("Conta excluída!");

        localStorage.clear();
        setUser(null);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const forgotPassword = async (email: string) => {
    await api
      .post("/login/forgot_password", email)
      .then(() => {
        setForgotPasswordModal(false);
        toast.success("Email enviado!");
      })
      .catch(() => {
        toast.error("Email não cadastrado");
      });
  };

  const passwordReset = async (date: IPasswordReset) => {
    await api
      .post("/login/reset_password", date)
      .then(() => {
        toast.success("Senha atualizada!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        const msg = err.response.data.message;

        if (msg === "User not registered") {
          toast.error("Email incorreto");
        } else if (msg === "Invalid reset token") {
          toast.error("Código inválido");
        } else {
          toast.error("Código expirado");
        }
      });
  };

  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem("@user:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          getUserProfile();
        } catch {
          localStorage.clear();
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        registerModal,
        setRegisterModal,
        editAddress,
        editUser,
        modalAddress,
        setAddressModal,
        user,
        setUser,
        selectedUser,
        setSelectedUser,
        setEditUserModal,
        editUserModal,
        deleteUserModal,
        setDeleteUserModal,
        deleteUser,
        forgotPasswordModal,
        setForgotPasswordModal,
        forgotPassword,
        passwordReset,
        getUserById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
