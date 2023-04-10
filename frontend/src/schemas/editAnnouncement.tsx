import * as yup from "yup";

const editAnnouncementSchema = yup.object().shape({
  announcement_type: yup.string(),
  title: yup.string().required("Campo obrigratório"),
  year: yup
    .number()
    .required("Campo obrigratório")
    .typeError("Campo obrigatório"),
  mileage: yup
    .number()
    .required("Campo obrigratório")
    .typeError("Campo obrigatório"),
  price: yup
    .number()
    .required("Campo obrigratório")
    .typeError("Campo obrigatório"),
  description: yup.string().required("Campo obrigratório"),
  vehicle_type: yup.string(),
  published: yup.string(),
  cover_img: yup.string().required("Campo obrigratório"),
  // photos: yup.string().required("Campo obrigratório"),
});

export default editAnnouncementSchema;
