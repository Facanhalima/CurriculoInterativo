import { useState } from 'react';
import { Container, Row, Col, Form, Card, Badge } from 'react-bootstrap';
import { certificationsData } from '../data/data';
import type { Certification } from '../types/types';

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const years = Array.from(new Set(certificationsData.map(cert => cert.year))).sort((a, b) => b - a);

  const filteredCertifications = certificationsData.filter((cert: Certification) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || cert.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <section id="certifications" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Certificações e Cursos</h2>
        <p className="text-center mb-4 text-muted">
          Comprometido com o aprendizado contínuo, participei de diversos cursos e programas
          intensivos para aprofundar meu conhecimento, especialmente em computação de alto
          desempenho e geofísica. Use a busca e os filtros para explorar.
        </p>

        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <div className="d-flex gap-3">
              <Form.Control
                type="text"
                placeholder="Buscar certificação..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Form.Select
                style={{ width: 'auto' }}
                value={selectedYear.toString()}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
              >
                <option value="all">Todos os anos</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredCertifications.map((cert: Certification, index: number) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Text className="text-muted small mb-2">{cert.year}</Card.Text>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text className="text-muted">{cert.institution}</Card.Text>
                  {cert.duration && (
                    <Badge bg="primary" className="mt-2">
                      {cert.duration}
                    </Badge>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredCertifications.length === 0 && (
          <p className="text-center text-muted mt-4">Nenhum certificado encontrado.</p>
        )}
      </Container>
    </section>
  );
};

export default Certifications;
