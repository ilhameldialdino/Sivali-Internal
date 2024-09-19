import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Tab, Modal, Form } from '@themesberg/react-bootstrap';
import { faEllipsisH, faEye, faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import listJobPost from "../../data/listJobPost";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

// Pass handleShowModal as a prop to TableRow
const TableRow = ({ id, job, experience, education, term, jobDescription, handleShowModal }) => {
  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {id}
        </Card.Link>
      </td>
      <td>{job}</td>
      <td>{experience}</td>
      <td>{education}</td>
      <td>{term}</td>
      <td>{jobDescription}</td>
      <td>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
            <span className="icon icon-sm">
              <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Button onClick={() => handleShowModal({ id, job, experience, education, term, jobDescription })}>
                View <FontAwesomeIcon icon={faEye} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/dashboard/create-or-edit-job-posting/${"Edit"}`}>
              Edit <FontAwesomeIcon icon={faEdit} className="d-none d-sm-inline ms-1" />
            </Dropdown.Item>
            <Dropdown.Item className="text-danger">
              <Button as={Link} to={'/'}>
                Remove <FontAwesomeIcon icon={faTrashAlt} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

const JobPosting = () => {
  const totalJobPosting = listJobPost.length;

  // State to handle modal visibility and selected data
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleShowModal = (job) => {
    setSelectedJob(job); // Set the clicked job post's data
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null); // Clear the selected job after closing
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Job Posting</h1>
          <p className="mb-0">
            Posting some job for the employee.
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" className="m-1" as={Link} to={`/dashboard/create-or-edit-job-posting/${"Create"}`}>
            <FontAwesomeIcon icon={faPlus} className="me-2" /> New Job Posting
          </Button>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="PartTimeJob">
        <Row>
          <Col lg={12}>
            <Nav className="nav-tabs">
              <Nav.Item>
                <Nav.Link eventKey="PartTimeJob" className="mb-sm-3 mb-md-0">
                  Part Time Job
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Draft" className="mb-sm-3 mb-md-0">
                  Draft
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="PostExpired" className="mb-sm-3 mb-md-0">
                  Post Expired
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={12}>
            <Tab.Content>
              <Tab.Pane eventKey="PartTimeJob" className="py-4">
                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                  <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                      <thead>
                        <tr>
                          <th className="border-bottom">Id</th>
                          <th className="border-bottom">Job</th>
                          <th className="border-bottom">Experience</th>
                          <th className="border-bottom">Education</th>
                          <th className="border-bottom">Term</th>
                          <th className="border-bottom">Job Description</th>
                          <th className="border-bottom">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Pass handleShowModal to TableRow */}
                        {listJobPost.map(t => (
                          <TableRow 
                            key={`job-${t.id}`} 
                            {...t} 
                            handleShowModal={handleShowModal} 
                          />
                        ))}
                      </tbody>
                    </Table>
                    <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                      <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                          <Pagination.Prev>Previous</Pagination.Prev>
                          <Pagination.Item active>1</Pagination.Item>
                          <Pagination.Item>2</Pagination.Item>
                          <Pagination.Item>3</Pagination.Item>
                          <Pagination.Next>Next</Pagination.Next>
                        </Pagination>
                      </Nav>
                      <small className="fw-bold">
                        Showing <b>{totalJobPosting}</b> out of <b>25</b> entries
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="Draft" className="py-4">
                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                  <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                      <thead>
                        <tr>
                          <th className="border-bottom">Id</th>
                          <th className="border-bottom">Job</th>
                          <th className="border-bottom">Experience</th>
                          <th className="border-bottom">Education</th>
                          <th className="border-bottom">Term</th>
                          <th className="border-bottom">Job Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Pass handleShowModal to TableRow */}
                        {listJobPost.map(t => (
                          <TableRow 
                            key={`job-${t.id}`} 
                            {...t} 
                            handleShowModal={handleShowModal} 
                          />
                        ))}
                      </tbody>
                    </Table>
                    <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                      <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                          <Pagination.Prev>Previous</Pagination.Prev>
                          <Pagination.Item active>1</Pagination.Item>
                          <Pagination.Item>2</Pagination.Item>
                          <Pagination.Item>3</Pagination.Item>
                          <Pagination.Next>Next</Pagination.Next>
                        </Pagination>
                      </Nav>
                      <small className="fw-bold">
                        Showing <b>{totalJobPosting}</b> out of <b>25</b> entries
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="PostExpired" className="py-4">
                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                  <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                      <thead>
                        <tr>
                          <th className="border-bottom">Id</th>
                          <th className="border-bottom">Job</th>
                          <th className="border-bottom">Experience</th>
                          <th className="border-bottom">Education</th>
                          <th className="border-bottom">Term</th>
                          <th className="border-bottom">Job Description</th>
                          <th className="border-bottom">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Pass handleShowModal to TableRow */}
                        {listJobPost.map(t => (
                          <TableRow 
                            key={`job-${t.id}`} 
                            {...t} 
                            handleShowModal={handleShowModal} 
                          />
                        ))}
                      </tbody>
                    </Table>
                    <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                      <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                          <Pagination.Prev>Previous</Pagination.Prev>
                          <Pagination.Item active>1</Pagination.Item>
                          <Pagination.Item>2</Pagination.Item>
                          <Pagination.Item>3</Pagination.Item>
                          <Pagination.Next>Next</Pagination.Next>
                        </Pagination>
                      </Nav>
                      <small className="fw-bold">
                        Showing <b>{totalJobPosting}</b> out of <b>25</b> entries
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* Modal to show job details */}
      {selectedJob && (
        <Modal as={Modal.Dialog} centered show={showModal} onHide={handleCloseModal}>
          <Form>
            <Modal.Header>
              <Modal.Title className="h6">Job Posting Details</Modal.Title>
              <Button variant="close" aria-label="Close" onClick={handleCloseModal} />
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <p><strong>ID: </strong>{selectedJob.id}</p>
                  <p><strong>Job: </strong>{selectedJob.job}</p>
                  <p><strong>Experience: </strong>{selectedJob.experience}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Education: </strong>{selectedJob.education}</p>
                  <p><strong>Term: </strong>{selectedJob.term}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p><strong>Job Description: </strong>{selectedJob.jobDescription}</p>
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

export default JobPosting;


