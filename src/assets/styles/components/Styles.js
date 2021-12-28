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
    display: block;
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
      border: 1.5px solid #fff;
      overflow: hidden;
      border-radius: 5px;

      @media ${breakpoints.big_phone} {
        flex-direction: column;
      }

      li {
        display: inline-block;
        font-family: "Oswald";
        font-size: 1.5em;
        border-left: 1.5px solid #fff;
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
          padding: 0 1.4em 0 1.54em;
        }
      }
    }
  }
`;

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;

  img {
    height: 50px;
    width: 50px;
    cursor: pointer;
  }

  h2 {
    font-size: 3em;
    padding-right: 1em;
    color: #ff9f1c;
  }

  @media ${breakpoints.big_phone} {
    margin: 0 0 1em;
    img {
      margin: 10px 0 0 10px;
      height: 35px;
      width: 35px;
    }
    h2 {
      font-size: 2em;
      padding-right: 1em;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 4em 0;

  @media ${breakpoints.phone} {
    margin: 0;
  }
`;

export const AboutContainerContent = styled.div`
  display: flex;
  border-bottom: 1.5px solid #fff;
  padding-bottom: 2em;

  @media ${breakpoints.phone} {
    flex-flow: wrap;
    padding: 0 1em;
  }
`;

export const AboutContainerPic = styled.div`
  width: 1500px;

  img {
    width: 100%;
    border-radius: 5px;
  }
  @media ${breakpoints.phone} {
    width: 250px;
  }
`;

export const AboutContainerIntro = styled.div`
  padding: 0 5em 0 4em;

  h3 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
  }

  @media ${breakpoints.phone} {
    padding: 0;
    h3 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
  }
`;

export const DownloadButton = styled.div`
  width: fit-content;
  padding: 17px 20px;
  cursor: pointer;
  font-size: 1.5em;
  background-color: #2ec4b6;
  border-radius: 10px;
  color: #fff;

  @media ${breakpoints.phone} {
    padding: 12px 20px;
    margin-left: 10%;
    font-size: 1em;
  }
`;

export const AboutContainerEpiloge = styled.div`
  p {
    font-size: 1.5em;
    &:first-child {
      border-bottom: 1.5px solid #fff;
      padding-bottom: 1.5em;
    }
  }
  a {
    text-decoration: none;
    color: #2ec4b6;
  }
`;
