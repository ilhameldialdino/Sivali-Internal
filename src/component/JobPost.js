import React from "react";
import { Col, Row, Nav, Tab, Container } from '@themesberg/react-bootstrap';


export default () => {
  return (
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Tabs</h1>
            <p className="mb-0">
              Use tabs to partition important data into easily navigable and interchangeable elements.
            </p>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="home">
            <Row>
                <Col lg={12}>
                <Nav className="nav-tabs">
                    <Nav.Item>
                    <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">
                        Home
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">
                        Profile
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">
                        Messages
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col lg={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="home" className="py-4">
                    <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile" className="py-4">
                    <p>
                        Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="messages" className="py-4">
                    <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
      </Container>
  );
};

