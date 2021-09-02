import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.chrome};
  height: 2.5em;
  display: flex;
`;

export const Logo = styled.div`
  flex: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border-right: 1px solid ${(props) => props.theme.chrome};
  border-left: 1px solid ${(props) => props.theme.chrome};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
`;
