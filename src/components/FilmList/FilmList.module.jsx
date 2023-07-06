import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  margin-top: 12px;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 14px;

  background-color: #bfdaa2;
  border-radius: 12px;
  transition: transform 250 ms ease-in-out;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #58d4ca;
    color: #111111;
    border-radius: 12px;
    transform: scale(1.01);
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;
