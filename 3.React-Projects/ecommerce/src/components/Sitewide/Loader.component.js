import React from "react";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";
import { Box } from "gestalt";
const LoaderComponent = ({ show }) => {
  const override = css`
    display: fixed;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    show && (
      <Box>
        <GridLoader css={override} color="darkorange" size={25} />
      </Box>
    )
  );
};

export default LoaderComponent;
