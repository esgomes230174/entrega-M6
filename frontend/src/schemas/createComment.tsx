import * as yup from "yup";

export const createCommentSchema = yup.object({
  message: yup.string().required("Campo obrigratório"),
});
