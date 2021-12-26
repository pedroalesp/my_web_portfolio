import styled from "styled-components";

const breakpoints = {
  phone: `(max-width: 320px)`,
  big_phone: `(max-width: 480px)`,
  tablet: `(max-width: 768px)`,
  desk: `(max-width: 1024px)`,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledHero = styled.section`
  @media ${breakpoints.big_phone} {
    padding: 4em 0 15px;
  }
  @media ${breakpoints.phone} {
    padding: 4em 0 15px;
  }
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4em 3.8em 15px;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 15px;

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

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: calc(25.5em - 5px);
    left: calc(50% - -7px);
    width: 1.5px;
    height: calc(5em + -9px);
    background: #ffffff;
  }

  display: flex;
  margin: 3.5em 1px 0 1.5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 80px;

  @media ${breakpoints.big_phone} {
    flex-direction: column;
    &:before {
    top: calc(21.5em - 7px);
    left: calc(50% - -5px);
    height: calc(4em + -6px);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #fff;
    overflow: hidden;
    border-radius: 5px;

    @media ${breakpoints.big_phone} {
      flex-direction: column;
    }

    li {
      &:first-child {
        border-left: none;
      }

      &:hover {
        background-color: #2ec4b6;
        transition-duration: 0.3s;
      }

      display: inline-block;
      font-family: "Oswald";
      font-size: 1.5em;
      border-left: 1.5px solid #fff;
      padding: 7px 0;

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
        padding: 0 1.4em 0 1.54em;
        }
      }
    }
  }
`;
