import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CardProject } from "./CardProject";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "A basic website for self description using HTML+CSS",
      imgUrl: projImg1,
    },
    {
      title: "Foodfiesta",
      description: "Responsive food ordering website",
      imgUrl: projImg2,
    },
    {
      title: "Omnifood",
      description: "Food ordering responsive website(HTML5 and CSS3)",
      imgUrl: projImg3,
    },
    {
      title: "Datin",
      description: "Bootstrap project",
      imgUrl: projImg4,
    },
    {
      title: "MovieFinder",
      description: "A movie rating website which uses TMDB API to display all movies, along with ratings and trailers",
      imgUrl: projImg5,
    },
    {
      title: "ExpenseTracker2.0",
      description: "Track your expense and income using voice commands",
      imgUrl: projImg6,
    },
  ];

  const views = [
    {
      title: "Brick breaker",
      description: "Game where you control a paddle with the arrow keys to bounce a ball up to break bricks",
      imgUrl: projImg7,
    },
    {
      title: "Currency Convertor",
      description: "A Js website to convert currency",
      imgUrl: projImg8,
    },
    {
      title: "NumberGuesser",
      description: "Guess the number through microphone of your system",
      imgUrl: projImg9,
    },
    {
      title: "Movie Ticket Booking",
      description: "Display movie choices and seats in a theater to select from in order to purchase tickets",
      imgUrl: projImg10,
    },
    {
      title: "Recipe book",
      description: "Search and generate random meals from the themealdb.com API",
      imgUrl: projImg11,
    },
    {
      title: "Income Expense Recorder",
      description: "A Js website that keeps track of your income and expenses on a daily basis",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          views.map((view, index) => {
                            return (
                              <CardProject
                                key={index}
                                {...view}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
