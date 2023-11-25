import { Card, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./skills.css"
import htmllogo from "../assets/HTML5_Logo_512.png"
import css from '../assets/css_original_wordmark_logo_icon_146576.png'
import js from "../assets/java-script.png"
import react from '../assets/react-3-512.png'
import redux from '../assets/pngwing.com (1).png'
import boot from "../assets/bootstrap_plain_wordmark_logo_icon_146620.png"
import node from '../assets/nodejs_plain_wordmark_logo_icon_146410.png'
import mongo from '../assets/mongodb_plain_wordmark_logo_icon_146423.png'
import aws from "../assets/Aws-Logo-PNG-Pic.png"
import ps from '../assets/pngwing.com.png'
import ai from '../assets/Adobe_Illustrator_CC_icon.svg.png'
import xd from "../assets/adobe-xd.svg"
import figma from "../assets/apps-figma.svg"


const SkillsComponent = () => {
  const frontendSkills = [
    { icon: htmllogo, color:"#e34c26", name: 'HTML' },
    { icon: css, color:"#264de4", name: 'CSS' },
    { icon: js, color:"#f0db4f", name: 'Javascript' },
    { icon: react ,color:"#61DBFB", name: 'React' },
    { icon: redux, color:"#764abc", name: 'Redux' },
    { icon:boot,color:"#563d7c", name: 'Bootstrap' },
    
  ];

  const backendSkills = [
    { icon: node, color:"#68a063", name: 'Nodejs' },
    { icon: mongo, color:"#3c873a", name: 'MongoDB' },
    { icon:aws, color:"#FF9900", name: 'AWS' },
    
  ];

  const designSkills = [
    { icon: ps, color:"#4FCCFE", name: 'Adobe Photoshop' },
    { icon: ai, color:"#f8a829", name: 'Adobe Illustrator' },
    { icon:xd, color:"#8f34c4", name: 'Adobe XD' },
    { icon:figma, color:"black", name: 'Figma' },
    
  ];
  return (
    <Container className="mt-4">
    <div className="mb-4">
      <h3 style={{color:"white"}}>TECHNOLOGIES /{`>`}</h3>
      <hr className="title-hr" />
      <h5 className="text-white mb-3">Frontend</h5>
      <Row xs={1} md={2} lg={4}>
        {frontendSkills.map((skill, index) => (
          <Col key={index} className="mb-4">
            <Card className="transparent-card">
              <Card.Body className="d-flex align-items-center">
                <div className="icon-container">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: '50px', height: '50px' }}
                    className="icon-img"
                  />
                </div>
                <div className="text-container">
                  <h6 style={{color:skill.color}}>{skill.name}</h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <div className="mb-4">
    <h5 className="text-white mb-3">Backend</h5>
      <Row xs={1} md={2} lg={4}>
        {backendSkills.map((skill, index) => (
          <Col key={index} className="mb-4">
            <Card className="transparent-card">
              <Card.Body className="d-flex align-items-center">
                <div className="icon-container">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: '50px', height: '50px' }}
                    className="icon-img"
                  />
                </div>
                <div className="text-container">
                  <h6 style={{color:skill.color}}>{skill.name}</h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <div className="mb-4">
    <h5 className="text-white mb-3">Design Tools</h5>
      <Row xs={1} md={2} lg={4}>
        {designSkills.map((skill, index) => (
          <Col key={index} className="mb-4">
            <Card className="transparent-card">
              <Card.Body className="d-flex align-items-center">
                <div className="icon-container">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: '50px', height: '50px' }}
                    className="icon-img"
                  />
                </div>
                <div className="text-container">
                  <h6 style={{color:skill.color}}>{skill.name}</h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Container>
  );
};

export default SkillsComponent