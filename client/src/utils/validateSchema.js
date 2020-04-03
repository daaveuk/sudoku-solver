import * as Yup from "yup";

const validateSchema = () => {
  const cols = 9;
  const rows = 9;
  let validation = {};

  for (let y = 1; y <= cols; y++) {
    for (let x = 1; x <= rows; x++) {
      validation[`${y}-${x}`] = Yup.number()
        .min(0, "Number cannot be less than 0")
        .max(9, "Number cannot be greater than 9");
    }
  }
  return Yup.object().shape(validation);
};

export default validateSchema;