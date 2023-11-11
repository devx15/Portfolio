import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import objectdetect from "../../Assets/Projects/objectdetect.png";
import ainft from "../../Assets/Projects/ainft.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import dgoogle from "../../Assets/Projects/dgoogle.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatLock"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/devx15/ChatLock"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dgoogle}
              isBlog={false}
              title="Decentrilized-google-Drive"
              description="A decentralized Google Drive revolutionizes data storage by eliminating central servers, relying instead on a network of user-operated nodes. Each user contributes storage and processing power, enhancing security, privacy, and accessibility. With complete user control and no intermediaries, it offers a more democratic and resilient internet experience."
              ghLink="https://github.com/devx15/Decentralized-Google-Drive"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NFT Marketplace"
              description="An online platform where unique digital assets, represented as Non-Fungible Tokens, are bought and sold. Unlike cryptocurrencies, NFTs are distinct and indivisible, making them valuable for digital artists and collectors. These marketplaces leverage blockchain technology, ensuring authenticity and provenance for digital creations, revolutionizing ownership and value in the digital realm."
              ghLink="https://github.com/devx15/NFT_Marketplace"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectdetect}
              isBlog={false}
              title="Object-detection-in-Satellite-Images"
              description="Implemented YOLO (You Only Look Once) algorithm for object detection in satellite imagery,
              utilizing advanced computer vision techniques and algorithms like RCNN, fast and faster
              RCNN. Enabled accurate identification and location of objects, valuable for urban planning,
              environmental monitoring, disaster management, and military reconnaissance.              "
              ghLink="https://github.com/devx15/Object-detection-in-Satellite-Images/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ainft}
              isBlog={false}
              title="Ai-NFT Generator"
              description="AI NFT generators are software tools that use artificial intelligence to create digital artworks that can be sold as non-fungible tokens (NFTs). NFTs are unique and verifiable digital assets that exist on a blockchain."
              ghLink="https://github.com/devx15/AI_NFT_Generator/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
