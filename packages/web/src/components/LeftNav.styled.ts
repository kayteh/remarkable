import styled from "styled-components";

export const LeftNavContainer = styled.div`
  border-right: 1px solid ${(props) => props.theme.chrome};
  width: 15vw;
  height: calc(100vh - 2.5em - 1px);
`;
