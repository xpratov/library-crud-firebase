import React from "react";
import styled from "styled-components";
import tablet from "../utils/tablet";
import laptop from "../utils/laptop";
import desktop from "../utils/desktop";

interface IContainer {
  children?: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  padding-inline: 16px;
  ${tablet} {
    padding-inline: 20px;
  }
  ${laptop} {
    max-width: 990px;
    margin: 0 auto;
    padding: 0;
  }
  ${desktop} {
    max-width: 1100px;
  }
`;

export const Container: React.FC<IContainer> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
