// import { IoIosArrowDropdown } from 'react-icons-io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-colums: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding : 1rem;
  padding-top : 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display : grid;
    grid-template-colums: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-colums-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;