import { get } from "axios";

const getSolution = async string => {
  const response = await get(
    `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/solve?puzzle=${string}`
  );
  return response.data;
};

export default getSolution;