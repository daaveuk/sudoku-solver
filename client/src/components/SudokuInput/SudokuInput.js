import React from "react";
import styled from "styled-components";

const SudokuInput = ({className, id, handleChange, values }) => {


  return <input id={id} className={className} type="text" min={0} max={9} onChange={handleChange} value={values[id]} />;
};

const styledSudokuInput = styled(SudokuInput)`
  display: block;
  height: 3rem;
  width: 3rem;
  appearance: none;
  border: 1px solid #808e9b;
  text-align: center;
`;

export default styledSudokuInput;
