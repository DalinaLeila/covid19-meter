import styled from "styled-components";
export const Rate = styled.h2`
  color: ${props => props.color};
`;

export const Hr = styled.hr`
  background-color: ${props => props.color};
  width: 200px;
  height: 5px;
  border: 1px solid ${props => props.color};
  opacity: 1;
`;

export const Main = styled.div`
  background-color: var(--mainWhite);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
  color: var(--mainBlack);
  border-bottom: 10px solid ${props => props.color};
  width: ${props => (props.overallCard ? "90vw" : "90vw")};
  height: ${props => (props.overallCard ? "80px" : "80px")};

  margin: "0px";

  div {
    display: flex;
    justify-content: space-around;
  }
  @media only screen and (min-width: 1441px) {
    padding: ${props => (props.overallCard ? "" : "1.5rem")};

    width: ${props => (props.overallCard ? "100%" : "300px")};
    height: ${props => (props.overallCard ? "70px" : "50px")};
    margin-bottom: ${props => (props.overallCard ? "0px" : "40px")};

    h2 {
      margin: 0;
      padding: 5px 0;
    }

    p {
      margin: 0;
    }

    div {
      display: flex;
      justify-content: ${props => (props.overallCard ? "" : "space-between")};

      width: 100%;
      align-items: center;
    }

    :nth-last-child(2) {
      margin: ${props => (props.overallCard ? "0px" : "0px 40px")};
    }
  }
`;
