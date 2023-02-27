import styled from "@emotion/styled";
import data from "../../data/data.json"


export const StatsWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 300px;

  text-align: center;
  color: #33333;

  background-color: #fff;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 32px;

  font-size: 18px;
  font-weight: 500;

  text-transform: uppercase;

  color: #333333;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  flex-basis: calc(100% / ${data.length});

  padding: 10px;

  color: #ffffff;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;

  font-size: 12px;
`;

export const Percent = styled.span`
  font-size: 18px;
`;
