import React from "react";
import { SudokuRegion } from "../SudokuRegion";
import styled from "styled-components";

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  `;
  
  const Grid = styled.div`
  border: 2px solid #808e9b;
  display: inline-block;
  margin: 2rem;
  margin: 0 auto;
`;

const SudokuGrid = ({ handleChange, values }) => {
  return (
    <Grid>
      <GridRow>
        <SudokuRegion id={1} handleChange={handleChange} values={values} />
        <SudokuRegion id={2} handleChange={handleChange} values={values} />
        <SudokuRegion id={3} handleChange={handleChange} values={values} />
      </GridRow>
      <GridRow>
        <SudokuRegion id={4} handleChange={handleChange} values={values} />
        <SudokuRegion id={5} handleChange={handleChange} values={values} />
        <SudokuRegion id={6} handleChange={handleChange} values={values} />
      </GridRow>
      <GridRow>
        <SudokuRegion id={7} handleChange={handleChange} values={values} />
        <SudokuRegion id={8} handleChange={handleChange} values={values} />
        <SudokuRegion id={9} handleChange={handleChange} values={values} />
      </GridRow>
    </Grid>
  );
};

export default SudokuGrid;
