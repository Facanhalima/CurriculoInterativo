import { Container, Row, Col } from 'react-bootstrap';
import type { TimelineItem } from '../types/types';
import { timelineData } from '../data/data';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Jornada Profissional e Acadêmica</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="position-relative">
              {/* Vertical line */}
              <div className="position-absolute h-100 start-50 translate-middle-x border-start border-2"></div>
              
              {timelineData.map((item: TimelineItem, index: number) => (
                <div key={index} className="mb-4 position-relative ps-4 ps-md-0">
                  <div className={`p-3 rounded shadow-sm bg-white ms-md-5 position-relative ${index % 2 === 0 ? 'me-md-5' : ''}`}>
                    <div className={`position-absolute top-50 translate-middle ${index % 2 === 0 ? 'start-0' : 'start-0'}`}>
                      <div className={`rounded-circle p-2 ${item.type === 'work' ? 'bg-primary' : 'bg-success'}`}>
                        <i className={`bi ${item.type === 'work' ? 'bi-briefcase' : 'bi-mortarboard'} text-white`}></i>
                      </div>
                    </div>
                    <h3 className="h5 mb-1">{item.title}</h3>
                    <p className="text-muted small mb-2">{item.institution} • {item.date}</p>
                    <p className="mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Timeline;
