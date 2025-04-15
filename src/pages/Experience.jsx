import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Trophy, Cpu, Smartphone, Code, Network, MessageCircle } from "lucide-react";

const experiences = [
  {
    icon: <Smartphone size={32} />,
    title: "App de Finanzas Personales",
    tech: ".NET MAUI, C#, SQLite, MVVM",
    description:
      "Diseñé y desarrollé una app móvil para registrar ingresos y egresos personales. Implementé arquitectura MVVM con almacenamiento local en SQLite.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Automatización con ESP32 y BLE",
    tech: "ESP32, Arduino, HC-SR04, KY-019",
    description:
      "Construí un sistema que activa un relevador al detectar proximidad, controlado por Bluetooth BLE desde una app externa.",
  },
  {
    icon: <Code size={32} />,
    title: "Portafolio Web en React",
    tech: "React.js, Bootstrap, React Router",
    description:
      "Desarrollé este portafolio profesional, responsivo y modular, para mostrar mis estudios y proyectos como desarrollador.",
  },
  {
    icon: <Network size={32} />,
    title: "Simulación de Redes VLANs & VTP",
    tech: "Cisco Packet Tracer",
    description:
      "Diseñé una red simulada con routers y switches aplicando VLANs y VTP para segmentación y administración centralizada.",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Bot Automatizado para WhatsApp",
    tech: "Node.js, Puppeteer",
    description:
      "Desarrollé un bot que automatiza el reenvío de mensajes de control de asistencia desde WhatsApp Web a un supervisor.",
  },
];

const Experience = () => {
  return (
    
    <Container className="mt-4">
      <Card className="shadow-sm rounded-4">
        <Card.Body>
          <h2 className="mb-4"><Trophy className="me-2" />Experiencia</h2>
          <Row xs={1} md={2} className="g-4">
            {experiences.map((exp, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm border-0 rounded-4">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3 text-primary">
                      {exp.icon}
                      <h5 className="ms-3 mb-0">{exp.title}</h5>
                    </div>
                    <small className="text-muted"><strong>Tecnologías:</strong> {exp.tech}</small>
                    <p className="mt-2 text-secondary">{exp.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Experience;
