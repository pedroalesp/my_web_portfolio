import React from "react";

import NavBar from "../components/NavBar";

import {
  Container,
  Button,
  ProjectContainerImg,
  ProjectInfo,
  ProjectsContent,
} from "../assets/styles/components/Styles";

import reactdex from "../assets/static/reactdex.jpg";
import coffeenmovies from "../assets/static/coffeenmovies.jpg";
import portfolio from "../assets/static/portfolio.jpg";

const Projects = () => (
  <Container>
    <NavBar>
      <h2>Projects</h2>
    </NavBar>
    <ProjectsContent>
      <ProjectContainerImg>
        <img src={reactdex} alt="Coffee n' Movies project" />
      </ProjectContainerImg>
      <ProjectInfo>
        <h3>React-Dex</h3>
        <p>
          A web app made with{" "}
          <strong>
            React.js and Bootstrap. The app connects with the PokeAPI
          </strong>{" "}
          and brings the data of the first Pokemon gen. <br /> Also implemented
          a <strong>search engine</strong> with <strong> React Hooks</strong>.
        </p>
        <div>
          <a
            href="https://pedroalesp.github.io/react-dex/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>🚀 Launch project</Button>
          </a>
          <a
            href="https://github.com/pedroalesp/react-dex"
            target="_blank"
            rel="noreferrer"
          >
            <strong>View code↗</strong>
          </a>
        </div>
      </ProjectInfo>
    </ProjectsContent>
    <ProjectsContent>
      <ProjectContainerImg>
        <img src={coffeenmovies} alt="Coffee n' Movies project" />
      </ProjectContainerImg>
      <ProjectInfo>
        <h3>Coffee n' Movies Blog</h3>
        <p>
          A movies blog (original content) made with{" "}
          <strong>
            React.js, server side rendering with Gatsby.js and stylized with
            Styled Components
          </strong>{" "}
          . <br />I used Ghost as CMS and
          <strong> queried the posts data via GraphQl</strong>.
        </p>
        <div>
          <a
            href="https://coffeenmovies.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>🚀 Launch project</Button>
          </a>
          <a
            href="https://github.com/pedroalesp/coffe-n-movies-blog"
            target="_blank"
            rel="noreferrer"
          >
            <strong>View code↗</strong>
          </a>
        </div>
      </ProjectInfo>
    </ProjectsContent>
    <ProjectsContent>
      <ProjectContainerImg>
        <img src={portfolio} alt="Portfolio project" />
      </ProjectContainerImg>
      <ProjectInfo>
        <h3>My Web Portfolio</h3>
        <p>
          <strong>You are looking at it!</strong> 👀 I made this website as a
          Single Page App using{" "}
          <strong>React.js, React Router and Styled Components </strong>
          <br /> It was{" "}
          <strong>
            designed by myself using Figma. <br />
          </strong>
          I wanted to try my skills and show my projects 🤘{" "}
        </p>
        <div>
          <a href="/">
            <Button>⚡You're looking at it</Button>
          </a>
          <a
            href="https://github.com/pedroalesp/my_web_portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <strong>View code↗</strong>
          </a>
        </div>
      </ProjectInfo>
    </ProjectsContent>
  </Container>
);

export default Projects;
