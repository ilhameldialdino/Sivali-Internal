import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Tab, Modal, Form } from '@themesberg/react-bootstrap';
import { faEllipsisH, faEye } from '@fortawesome/free-solid-svg-icons';

import listAttendance from "../../data/listAttendance";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

const TableRow = ({ attendanceId, date, name, shift, checkIn, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut, handleShowModal }) => {
  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {attendanceId}
        </Card.Link>
      </td>
      <td>
        <span className="fw-normal">{date}</span>
      </td>
      <td>
        <span className="fw-normal">{name}</span>
      </td>
      <td>
        <span className="fw-normal">{shift}</span>
      </td>
      <td>
        <span className="fw-normal">{checkIn}</span>
      </td>
      <td>
        <span className="fw-normal">{checkOut}</span>
      </td>
      <td>
        <span className="fw-normal">{jobName}</span>
      </td>
      <td>
        <span className="fw-normal">{jobDescription}</span>
      </td>
      <td>
        <span className="fw-normal">{locationIn}</span>
      </td>
      <td>
        <span className="fw-normal">{locationOut}</span>
      </td>
      <td>
        <span className="fw-normal">{photoIn}</span>
      </td>
      <td>
        <span className="fw-normal">{photoOut}</span>
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
              <Button onClick={() => handleShowModal({ attendanceId, date, name, shift, checkIn, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut })}>
                View <FontAwesomeIcon icon={faEye} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

const ListAttendance = () => {
  const totalListAttendances = listAttendance.length;

  // State to handle modal visibility and selected data
  const [showModal, setShowModal] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  const handleShowModal = (attendance) => {
    setSelectedAttendance(attendance); // Set the clicked row's data
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAttendance(null); // Clear the selected attendance after closing
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">List Attendance</h1>
          <p className="mb-0">
            Attendance of all recent employee.
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
                          <th>Date</th>
                          <th>Shift</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Job Name</th>
                          <th>Job Description</th>
                          <th>Location In</th>
                          <th>Location Out</th>
                          <th>Photo In</th>
                          <th>Photo Out</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listAttendance.map(t => (
                          <TableRow key={`attendance-${t.attendanceId}`} {...t} handleShowModal={handleShowModal} />
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
                        Showing <b>{totalListAttendances}</b> out of <b>25</b> entries
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
      {selectedAttendance && (
        <Modal as={Modal.Dialog} centered show={showModal} onHide={handleCloseModal}>
          <Form>
            <Modal.Header>
              <Modal.Title className="h6">Attendance Details</Modal.Title>
              <Button variant="close" aria-label="Close" onClick={handleCloseModal} />
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <p><strong>ID: </strong>{selectedAttendance.attendanceId}</p>
                  <p><strong>Name: </strong>{selectedAttendance.name}</p>
                  <p><strong>Date: </strong>{selectedAttendance.date}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Shift: </strong>{selectedAttendance.shift}</p>
                  <p><strong>Check In: </strong>{selectedAttendance.checkIn}</p>
                  <p><strong>Check Out: </strong>{selectedAttendance.checkOut}</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p><strong>Job Name: </strong>{selectedAttendance.jobName}</p>
                  <p><strong>Location In: </strong>{selectedAttendance.locationIn}</p>
                  <p><strong>Photo In: </strong>{selectedAttendance.photoIn}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Job Description: </strong>{selectedAttendance.jobDescription}</p>
                  <p><strong>Location Out: </strong>{selectedAttendance.locationOut}</p>
                  <p><strong>Photo Out: </strong>{selectedAttendance.photoOut}</p>
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

export default ListAttendance;
