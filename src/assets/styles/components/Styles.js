import styled from "styled-components";

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
    content: "🐦";
  }

  display: flex;
  margin-top: 2em;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      display: inline-block;
      border: 1.5px solid #fff;
      font-family: "Oswald";
      font-size: 1.5em;

      a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        padding: 1.2em 1.5em 3em 1.55em;
      }
    }
  }
`;
