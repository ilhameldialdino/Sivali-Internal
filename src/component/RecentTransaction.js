import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Table } from '@themesberg/react-bootstrap';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import USAFlag from "../assets/img/flags/united-states-of-america.svg";
import CanadaFlag from "../assets/img/flags/canada.svg";
import UKFlag from "../assets/img/flags/united-kingdom.svg";
import FranceFlag from "../assets/img/flags/france.svg";
import JapanFlag from "../assets/img/flags/japan.svg";
import GermanyFlag from "../assets/img/flags/germany.svg"
import { Col, Row, Nav, Tab, Card, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";

const RecentTransaction = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [error, setError] = useState(null);  // Add an error state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log(formData);
  };

  return (
    <article>
      <Container className="px-0">
       <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
        <h1 className="h2">Tabs</h1>
        <p className="mb-0">
            Use tabs to partition important data into easily navigable and interchangeable elements.
        </p>
        </Col>
       </Row>
      <Table>
        <thead className="thead-light">
            <tr>
            <th className="border-0">Country</th>
            <th className="border-0">All</th>
            <th className="border-0">All Change</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="border-0">
                <a href="#Unites States" className="d-flex align-items-center">
                <Image roundedCircle src={USAFlag} className="me-2 image image-small" alt="Unites States" />
                <div><span className="h6">Unites States</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">106</td>
            <td className="border-0 text-danger">
                <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                <span className="fw-bold">5</span>
            </td>
            </tr>
            <tr>
            <td className="border-0">
                <a href="#Canada" className="d-flex align-items-center">
                <Image roundedCircle src={CanadaFlag} className="me-2 image image-small" alt="Canada" />
                <div><span className="h6">Canada</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">76</td>
            <td className="border-0 text-success">
                <FontAwesomeIcon icon={faAngleUp} className="me-1" />
                <span className="fw-bold">17</span>
            </td>
            </tr>
            <tr>
            <td className="border-0">
                <a href="#United Kingdom" className="d-flex align-items-center">
                <Image roundedCircle src={UKFlag} className="me-2 image image-small" alt="United Kingdom" />
                <div><span className="h6">United Kingdom</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">147</td>
            <td className="border-0 text-success">
                <FontAwesomeIcon icon={faAngleUp} className="me-1" />
                <span className="fw-bold">10</span>
            </td>
            </tr>
            <tr>
            <td className="border-0">
                <a href="#France" className="d-flex align-items-center">
                <Image roundedCircle src={FranceFlag} className="me-2 image image-small" alt="France" />
                <div><span className="h6">France</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">112</td>
            <td className="border-0 text-success">
                <FontAwesomeIcon icon={faAngleUp} className="me-1" />
                <span className="fw-bold">3</span>
            </td>
            </tr>
            <tr>
            <td className="border-0">
                <a href="#Japan" className="d-flex align-items-center">
                <Image roundedCircle src={JapanFlag} className="me-2 image image-small" alt="Japan" />
                <div><span className="h6">Japan</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">115</td>
            <td className="border-0 text-danger">
                <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                <span className="fw-bold">12</span>
            </td>
            </tr>
            <tr>
            <td className="border-0">
                <a href="#Germany" className="d-flex align-items-center">
                <Image roundedCircle src={GermanyFlag} className="me-2 image image-small" alt="Germany" />
                <div><span className="h6">Germany</span></div>
                </a>
            </td>
            <td className="border-0 fw-bold">220</td>
            <td className="border-0 text-danger">
                <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                <span className="fw-bold">56</span>
            </td>
            </tr>
        </tbody>
        </Table>
      </Container>
    </article>
  );
};

export default RecentTransaction;
