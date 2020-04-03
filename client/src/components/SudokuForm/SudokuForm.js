import React from "react";
import { withFormik } from "formik";
import { SudokuGrid } from "../SudokuGrid";
import {
  convertToString,
  convertToObject,
  generateDefaultValues,
  validateSchema
} from "../../utils";
import { getSolution } from "../../api";
import styled from 'styled-components';


const Button = styled.button`
  background-color: #05c46b;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid #0be881;
  color: #d2dae2;
  padding: 1rem;
  width: 10em;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 10px 10px 10px #10151a;
  }
`


const SudokuForm = ({ handleSubmit, handleChange, values }) => {
  console.log(`${process.env.REACT_APP_BASE_URL}:${process.env.PORT}/solve?puzzle=`);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <SudokuGrid handleChange={handleChange} values={values} />
      </div>
      <Button type="submit">Solve</Button>
    </form>
  );
};

const ConnectedSudokuForm = withFormik({
  mapPropsToValues: () => generateDefaultValues(),
  validationSchema: validateSchema(),
  handleSubmit: async (values, { setSubmitting, setValues }) => {
    const string = convertToString(values);
    const { data, error } = await getSolution(string);
    if (error) {
      alert(error);
    }
    const object = convertToObject(data);
    setValues(object);
    setSubmitting(false);
  },
  displayName: "SudokuForm"
})(SudokuForm);

export default ConnectedSudokuForm;
