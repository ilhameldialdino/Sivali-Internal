import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Tab, Modal, Form } from '@themesberg/react-bootstrap';
import { faEllipsisH, faEye } from '@fortawesome/free-solid-svg-icons';

import listCandidate from "../../data/listCandidate";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

const TableRow = ({ candidateId, name, gender, jobName, jobDescription, handleShowModal }) => {
  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {candidateId}
        </Card.Link>
      </td>
      <td>
        <span className="fw-normal">{name}</span>
      </td>
      <td>
        <span className="fw-normal">{jobName}</span>
      </td>
      <td>
        <span className="fw-normal">{gender}</span>
      </td>
      <td>
        <span className="fw-normal">{jobDescription}</span>
      </td>
      <td>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
            <span className="icon icon-sm">
              <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Button onClick={() => handleShowModal({ candidateId, name, jobName, jobDescription })}>
                View <FontAwesomeIcon icon={faEye} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

const ListCandidate = () => {
  const totalListCandidates = listCandidate.length;

  // State to handle modal visibility and selected data
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleShowModal = (candidate) => {
    setSelectedCandidate(candidate); // Set the clicked row's data
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCandidate(null); // Clear the selected candidate after closing
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">List Candidate</h1>
          <p className="mb-0">
            Candidate of all who applied jobs
          </p>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="PartTimeJob">
        <Row>
          <Col lg={12}>
            <Nav className="nav-tabs">
              <Nav.Item>
                <Nav.Link eventKey="FullTimeJob" className="mb-sm-3 mb-md-0">
                  Full Time Job
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="PartTimeJob" className="mb-sm-3 mb-md-0">
                  Part Time Job
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={12}>
            <Tab.Content>
              <Tab.Pane eventKey="FullTimeJob" className="py-4">
                {/* Full Time Job Table (if needed) */}
              </Tab.Pane>
              <Tab.Pane eventKey="PartTimeJob" className="py-4">
                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                  <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Job Name</th>
                          <th>Gender</th>
                          <th>Job Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listCandidate.map(t => (
                          <TableRow key={`candidate-${t.candidateId}`} {...t} handleShowModal={handleShowModal} />
                        ))}
                      </tbody>
                    </Table>
                    <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                      <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                          <Pagination.Prev>
                            Previous
                          </Pagination.Prev>
                          <Pagination.Item active>1</Pagination.Item>
                          <Pagination.Item>2</Pagination.Item>
                          <Pagination.Item>3</Pagination.Item>
                          <Pagination.Next>
                            Next
                          </Pagination.Next>
                        </Pagination>
                      </Nav>
                      <small className="fw-bold">
                        Showing <b>{totalListCandidates}</b> out of <b>25</b> entries
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* Modal to show details */}
      {selectedCandidate && (
        <Modal as={Modal.Dialog} centered show={showModal} onHide={handleCloseModal}>
          <Form>
            <Modal.Header>
              <Modal.Title className="h6">Candidate Details</Modal.Title>
              <Button variant="close" aria-label="Close" onClick={handleCloseModal} />
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <p><strong>ID: </strong>{selectedCandidate.candidateId}</p>
                  <p><strong>Name: </strong>{selectedCandidate.name}</p>
                  <p><strong>Date: </strong>{selectedCandidate.date}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Shift: </strong>{selectedCandidate.shift}</p>
                  <p><strong>Check In: </strong>{selectedCandidate.checkIn}</p>
                  <p><strong>Check Out: </strong>{selectedCandidate.checkOut}</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p><strong>Job Name: </strong>{selectedCandidate.jobName}</p>
                  <p><strong>Location In: </strong>{selectedCandidate.locationIn}</p>
                  <p><strong>Photo In: </strong>{selectedCandidate.photoIn}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Job Description: </strong>{selectedCandidate.jobDescription}</p>
                  <p><strong>Location Out: </strong>{selectedCandidate.locationOut}</p>
                  <p><strong>Photo Out: </strong>{selectedCandidate.photoOut}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </Container>
  );
};

export default ListCandidate;
