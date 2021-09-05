import * as Yup from "yup"

export const createTemplateForm = Yup.object().shape({
  templateName: Yup.string().required("Required!"),
  documents: Yup.array().min(1, "Least one"),
})
