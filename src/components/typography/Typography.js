import styled from "styled-components";

export function Text(props) {
  return <StyledText>{props.children}</StyledText>;
}

export function PageTitle(props) {
  return <StyledPageTitle>{props.children}</StyledPageTitle>;
}

const StyledText = styled.div`
  font-family: Arial, sans-serif;
  color: white;
`;

const StyledPageTitle = styled.div`
  line-height: 35px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 400;
`;
