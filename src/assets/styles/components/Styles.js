import styled from "styled-components";

const breakpoints = {
  phone: "320px",
  tablet: "768px",
  desk: "1024px",
};

export const Container = styled.div`
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
  padding: 4em 0 0 0;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 15px;

  h1 {
    font-size: 5em;
  }

  h2 {
    font-family: "Montserrat";
    font-size: 2em;
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
  margin-top: 3.5em;
  margin-left: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 80px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #fff;
    overflow: hidden;
    border-radius: 5px;

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

      a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        padding: 0 1.4em 0 1.54em;
      }
    }
  }
`;
