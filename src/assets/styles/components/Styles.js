import styled from "styled-components";

const breakpoints = {
  phone: `(max-width: 321px)`,
  big_phone: `(max-width: 480px)`,
  tablet: `(max-width: 769px)`,
  desk: `(max-width: 1025px)`,
};

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledHero = styled.section`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4em 3.8em 15px;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 15px;

  @media ${breakpoints.big_phone} {
    padding: 4em 0 15px;
  }
  @media ${breakpoints.phone} {
    padding: 4em 0 15px;
  }

  h1 {
    font-size: 5em;

    @media ${breakpoints.tablet} {
      font-size: 4em;
    }
    @media ${breakpoints.phone} {
      font-size: 3em;
    }
    @media ${breakpoints.big_phone} {
      font-size: 3em;
    }
  }

  h2 {
    font-family: "Montserrat";
    font-size: 2em;

    @media ${breakpoints.tablet} {
      font-size: 1.7em;
    }
    @media ${breakpoints.phone} {
      font-size: 1.5em;
    }
    @media ${breakpoints.big_phone} {
      font-size: 1.5em;
    }
  }

  h3 {
    font-size: 1.5em;
  }

  span {
    color: #ff9f1c;
  }
`;

export const HeroIcon = styled.div`
  img {
    width: 80px;
    height: 80px;
    padding-left: 10px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  margin: 3.5em 1px 0 1.5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 80px;

  &:before {
    content: "";
    display: ${({ show }) => (show ? "block" : "none")} ;
    position: absolute;
    top: calc(25.5em - 5px);
    left: calc(50% - -7px);
    width: 1.5px;
    height: calc(5em + -9px);
    background: #ffffff;
  }

  @media ${breakpoints.tablet} {
    &:before {
      flex-direction: column;
      top: calc(23.5em - 8px);
      height: calc(5em + -5px);
    }
  }

  @media ${breakpoints.big_phone} {
    &:before {
      top: calc(21.5em - 7px);
      left: calc(50% - -5px);
      height: calc(4em + -6px);
    }
  }

  @media ${breakpoints.phone} {
    &:before {
      top: calc(23.5em - 9px);
      height: calc(4em + -8px);
    }
  }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: ${({ show }) => (show ? "1.5px solid #fff" : "none")};
      overflow: hidden;
      border-radius: 5px;

      @media ${breakpoints.big_phone} {
        flex-direction: column;
      }

      li {
        display: inline-block;
        font-family: "Oswald";
        font-size: 1.5em;
        border-left: ${({ show }) => (show ? "1.5px solid #fff" : "none")};
        padding: 7px 0;

        &:first-child {
          border-left: none;
        }

        &:hover {
          background-color: #2ec4b6;
          transition-duration: 0.3s;
        }

        @media ${breakpoints.big_phone} {
          &:first-child {
            border-top: none;
            padding: 7px 10px;
          }
          &:nth-child(3) {
            padding: 7px 16px;
          }
          &:nth-child(4) {
            padding: 7px 1px;
          }
          border-left: 0px;
          border-top: 1.5px solid #fff;
        }

        a {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          padding: ${({ show }) =>
            show ? "0 1.4em 0 1.54em" : "0 0.39em 0 1.54em"};
        }
      }
    }
  }
`;
