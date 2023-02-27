import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  width: 300px;

  text-align: center;
  color: #3a3b3c;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
`;

export const Description = styled.div`
  padding: 40px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: #deeff5;
`;

export const Name = styled.p`
  margin-top: 20px;
  margin-bottom: 0;

  font-weight: 700;
  line-height: 1.28;
`;

export const Tag = styled.p`
  margin-top: 20px;
  margin-bottom: 0;

  color: #808080;
`;

export const Location = styled.p`
  margin-top: 20px;
  margin-bottom: 0;

  color: #808080;
`;

export const Stats = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #deeff5;

  & li {
    flex-basis: calc(100% / 3);

    padding: 10px;

    border: 1px solid #d3d3d3;

    border-right: transparent;
    border-bottom: transparent;

    &:first-of-type {
      border-left: transparent;
    }
  }
`;

export const Label = styled.span`
  color: #808080;
`;

export const Quantity = styled.span`
  display: block;

  font-weight: 700;
  line-height: 1.28;
`;
