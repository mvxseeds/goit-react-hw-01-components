import styled from "@emotion/styled";


export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 5px 10px;

  border-radius: 5px;
  background-color: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;

  width: 16px;
  height: 16px;
  margin-right: 10px;

  border-radius: 50%;

  background-color: red;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
`;
