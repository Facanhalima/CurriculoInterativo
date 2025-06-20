import { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { skillsData } from '../data/data';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(skillsData)[0]);

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Habilidades Técnicas</h2>
        <p className="text-center mb-4 text-muted">
          Minhas competências abrangem diversas áreas, desde linguagens de programação e ferramentas
          de desenvolvimento até metodologias avançadas em computação paralela e ciência de dados.
          Clique nas categorias abaixo para filtrar as habilidades.
        </p>

        <Row className="justify-content-center mb-4">
          <Col md={8} className="d-flex flex-wrap justify-content-center gap-2">
            {Object.keys(skillsData).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline-primary'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            {skillsData[activeCategory].map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar now={skill.level} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
