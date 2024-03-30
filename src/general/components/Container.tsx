import React from "react";
import styled from "styled-components";

interface IContainer {
  children?: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  padding-inline: 16px;
`;

export const Container: React.FC<IContainer> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
