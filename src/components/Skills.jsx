import { Card, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./skills.css"

const SkillsComponent = () => {
  const frontendSkills = [
    { icon: 'src/assets/HTML5_Logo_512.png', color:"#e34c26", name: 'HTML' },
    { icon: 'src/assets/css_original_wordmark_logo_icon_146576.png', color:"#264de4", name: 'CSS' },
    { icon:"src/assets/java-script.png", color:"#f0db4f", name: 'Javascript' },
    { icon: 'src/assets/react-3-512.png',color:"#61DBFB", name: 'React' },
    { icon: 'src/assets/pngwing.com (1).png', color:"#764abc", name: 'Redux' },
    { icon:"src/assets/bootstrap_plain_wordmark_logo_icon_146620.png",color:"#563d7c", name: 'Bootstrap' },
    
  ];

  const backendSkills = [
    { icon: 'src/assets/nodejs_plain_wordmark_logo_icon_146410.png', color:"#68a063", name: 'Nodejs' },
    { icon: 'src/assets/mongodb_plain_wordmark_logo_icon_146423.png', color:"#3c873a", name: 'MongoDB' },
    { icon:"src/assets/Aws-Logo-PNG-Pic.png", color:"#FF9900", name: 'AWS' },
    
  ];

  const designSkills = [
    { icon: 'src/assets/pngwing.com.png', color:"#4FCCFE", name: 'Adobe Photoshop' },
    { icon: 'src/assets/Adobe_Illustrator_CC_icon.svg.png', color:"#f8a829", name: 'Adobe Illustrator' },
    { icon:"src/assets/adobe-xd.svg", color:"#8f34c4", name: 'Adobe XD' },
    { icon:"src/assets/apps-figma.svg", color:"black", name: 'Figma' },
    
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