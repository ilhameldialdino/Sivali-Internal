import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Tab } from '@themesberg/react-bootstrap';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import listEducations from "../../data/listEducation";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

const TableRow = ({ educationId, date, name, amount, status, handleShowModal}) => {
  const statusVariant = status === "Paid" ? "success"
    : status === "Due" ? "warning"
    : status === "Canceled" ? "danger" : "primary";

  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {educationId}
        </Card.Link>
      </td>
      <td>
        <span className="fw-normal">
          {date}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {name}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {amount}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {status}
        </span>
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
              <Button onClick={() => handleShowModal({ educationId, date, name, amount, status })}>
                View <FontAwesomeIcon icon={faEye} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/dashboard/create-or-edit-education/${"Edit"}`}>
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

const ListEducations = () => {
  const totalListEducations = listEducations.length;

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
          <h1 className="h2">List Educations</h1>
          <p className="mb-0">
            List of all educations.
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" className="m-1" as={Link} to={`/dashboard/create-or-edit-education/${"Create"}`}>
            <FontAwesomeIcon icon={faPlus} className="me-2" /> New Education
          </Button>
        </Col>
      </Row>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">ID</th>
                <th className="border-bottom">Date</th>
                <th className="border-bottom">Name</th>
                <th className="border-bottom">Amount</th>
                <th className="border-bottom">Status</th>
              </tr>
            </thead>
            <tbody>
              {listEducations.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
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
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                  Next
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{totalListEducations}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListEducations;
