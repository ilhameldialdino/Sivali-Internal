import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup, Container, Tab } from '@themesberg/react-bootstrap';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import listTransaction from "../../data/listCompany";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

const TableRow = ({ companyId, date, name, amount, status}) => {
  const statusVariant = status === "Paid" ? "success"
    : status === "Due" ? "warning"
    : status === "Canceled" ? "danger" : "primary";

  return (
    <tr>
      <td>
        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
          {companyId}
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
    </tr>
  );
};

const ListCompany = () => {
  const totalListCompanies = listTransaction.length;

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">List Company</h1>
          <p className="mb-0">
            List of all company.
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" className="m-1" as={Link} to={`/dashboard/create-transaction`}>
            <FontAwesomeIcon icon={faPlus} className="me-2" /> New Company
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
              {listTransaction.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
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
              Showing <b>{totalListCompanies}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListCompany;
