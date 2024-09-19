import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Modal, Form } from '@themesberg/react-bootstrap';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import listPic from "../../data/listPic";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

const TableRow = ({ picId, picName, picPhoneNumber, handleShowModal }) => {
  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {picId}
        </Card.Link>
      </td>
      <td>
        <span className="fw-normal">
          {picName}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {picPhoneNumber}
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
              <Button onClick={() => handleShowModal({ picId, picName, picPhoneNumber })}>
                View <FontAwesomeIcon icon={faEye} className="d-none d-sm-inline ms-1" />
              </Button>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/dashboard/create-or-edit-pic/${"Edit"}`}>
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

const ListPic = () => {
  const totalListPics = listPic.length;

  // State to handle modal visibility and selected data
  const [showModal, setShowModal] = useState(false);
  const [selectedPic, setSelectedPic] = useState(null);

  const handleShowModal = (job) => {
    setSelectedPic(job); // Set the clicked job post's data
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPic(null); // Clear the selected job after closing
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">List PIC</h1>
          <p className="mb-0">
            All Listed PIC.
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" className="m-1" as={Link} to={`/dashboard/create-or-edit-pic/${"Create"}`}>
            <FontAwesomeIcon icon={faPlus} className="me-2" /> New PIC
          </Button>
        </Col>
      </Row>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">ID</th>
                <th className="border-bottom">Name</th>
                <th className="border-bottom">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {listPic.map(t => (
                <TableRow 
                  key={`pic-${t.picId}`} 
                  {...t} 
                  handleShowModal={handleShowModal}
                />
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
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                  Next
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{totalListPics}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>

      {/* Modal to show job details */}
      {selectedPic && (
        <Modal as={Modal.Dialog} centered show={showModal} onHide={handleCloseModal}>
          <Form>
            <Modal.Header>
              <Modal.Title className="h6">PIC Details</Modal.Title>
              <Button variant="close" aria-label="Close" onClick={handleCloseModal} />
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <p><strong>ID: </strong>{selectedPic.picId}</p>
                  <p><strong>Name: </strong>{selectedPic.picName}</p>
                  <p><strong>Phone Number: </strong>{selectedPic.picPhoneNumber}</p>
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

export default ListPic;
