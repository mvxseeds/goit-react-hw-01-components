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

    &:first-child {
      border-top-left-radius: 4px;
      border-right: 1px solid #fff;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-left: 1px solid #fff;
    }
  }

  & tr {
    height: 60px;

    &:nth-child(even) {
          background-color: #ecf1f4;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      & td {
        &:first-child {
          border-bottom-left-radius: 4px;
        }

        &:last-child {
          border-bottom-right-radius: 4px;
        }
      }
    }
  }

  & td {
    color: #6e6e6e;
    text-align: center;
    border-left: 1px solid #e4e4e4;

    &:first-child {
      border-left: none;
      padding-left: 80px;
      text-align: left;

      text-transform: capitalize;
    }

    &:last-child {
      border-right: none;
    }
  }
`;
