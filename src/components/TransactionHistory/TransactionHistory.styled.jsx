import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 720px;

  border-radius: 4px;
  border-collapse: collapse;
  background-color: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & th {
    width: calc(100% / 3);

    color: #ffffff;
    background-color: #00bcd5;

    text-transform: uppercase;

    &:first-of-type {
      border-top-left-radius: 4px;
      border-right: 1px solid #fff;
    }

    &:last-of-type {
      border-top-right-radius: 5px;
      border-left: 1px solid #fff;
    }
  }

  & tr {
    height: 60px;

    &:nth-of-type(even) {
          background-color: #ecf1f4;
    }

    &:last-of-type {
      border-bottom-radius: 4px;

      & td {
        border-bottom: collapse;

        &:first-of-type {
          border-bottom-left-radius: 4px;
        }
      }
  }

  & td {
    color: #6e6e6e;
    text-align: center;
    border-left: 1px solid #e4e4e4;

    &:first-of-type {
      border-left: none;
      padding-left: 80px;
      text-align: left;

      text-transform: capitalize;
    }

    &:last-of-type {
      border-right: none;
      border-bottom-right-radius: 4px;
    }
  }
`;
