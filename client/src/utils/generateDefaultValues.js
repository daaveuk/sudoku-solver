const generateDefaultValues = () => {
  const cols = 9;
  const rows = 9;
  let defaultValues = {};

  for (let y = 1; y <= cols; y++) {
    for (let x = 1; x <= rows; x++) {
      defaultValues[`${y}-${x}`] = "";
    }
  }

  return defaultValues;
};

export default generateDefaultValues;
