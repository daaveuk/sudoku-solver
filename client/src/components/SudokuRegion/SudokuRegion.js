import React from "react";
import { SudokuInput } from "../SudokuInput";
import styled from "styled-components";

const RegionRow = styled.div`
  display: flex;
`;

const Region = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #808e9b;
`;

const SudokuRegion = ({ id, handleChange, values }) => {
  return (
    <Region className="Region">
      <RegionRow>
        <SudokuInput id={`${id}-1`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-2`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-3`} handleChange={handleChange} values={values} />
      </RegionRow>
      <RegionRow>
        <SudokuInput id={`${id}-4`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-5`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-6`} handleChange={handleChange} values={values} />
      </RegionRow>
      <RegionRow>
        <SudokuInput id={`${id}-7`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-8`} handleChange={handleChange} values={values} />
        <SudokuInput id={`${id}-9`} handleChange={handleChange} values={values} />
      </RegionRow>
    </Region>
  );
};

export default SudokuRegion;
