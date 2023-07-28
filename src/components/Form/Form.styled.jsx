import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: black;

  background: #bfdaa2;
  border-radius: 10px;

  transition: transform 250 ms ease-in-out;

  :active,
  :focus,
  :hover {
    color: black;
    transform: scale(1.02);
  }
`;

export const ButtonSearch = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  margin-left: 12px;
  padding: 15px 16px;

  transition: transform 250 ms ease-in-out;

  color: rgba(255, 255, 255, 0.2);

  background: #bfdaa2;
  border-radius: 10px;

  :not(:disabled):active,
  :focus,
  :not(:disabled):hover {
    color: white;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

rgba(109, 84, 235, 1), rgba(101, 35, 146, 1);
rgba(46, 23, 70, 1), rgba(46, 34, 95, 1);
rgba(52, 31, 160, 1), rgba(101, 35, 146, 1);
rgba(101, 35, 146, 1), rgba(52, 31, 160, 1);
