import * as yup from "yup";

export const editUserSchema = yup.object({
  birth_date: yup
    .string()
    // .matches(
    //   /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
    //   "Data deve ser no formato DD/MM/YYYY"
    // )
    .optional(),
});
