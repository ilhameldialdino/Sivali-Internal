import React, { useState } from 'react';
import useRegister from '../hooks/useRegister';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faPhone, faBuilding, faPersonBooth } from "@fortawesome/free-solid-svg-icons"; // Add faInfoCircle here
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";

const Register = () => {
    const { register, loading, error } = useRegister();
    const [formData, setFormData] = useState({
        company_email: '',
        company_password: '',
        company_name: '',
        company_phone_number: '',
        company_industry: '',
        company_position: '',
        company_size: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };
    return (
        <main>
          <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <Container>
              <p className="text-center">
                <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
                  <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
                </Card.Link>
              </p>
              <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                  <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-700">
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <h3 className="mb-0">Sign Up for Company</h3>
                    </div>
                    <Form className="mt-4" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                            <Form.Group id="email" className="mb-4">
                                <Form.Label>Company Email</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <Form.Control
                                    autoFocus
                                    required
                                    type="email"
                                    name="company_email"
                                    placeholder="example@company.com"
                                    value={formData.company_email}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group id="company_name" className="mb-4">
                                <Form.Label>Company Name</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faBuilding} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    name="company_name"
                                    placeholder="PT. Example Tbk."
                                    value={formData.company_name}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <Form.Group id="company_phone_number" className="mb-4">
                                <Form.Label>Company Phone Number</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faPhone} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    name="company_phone_number"
                                    placeholder="Company Phone Number"
                                    value={formData.company_phone_number}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group id="company_industry" className="mb-4">
                                <Form.Label>Industry</Form.Label>
                                <Form.Control
                                as="select"
                                required
                                name="company_industry"
                                value={formData.company_industry}
                                onChange={handleChange}
                                >
                                <option value="">Choose...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                </Form.Control>
                            </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <Form.Group id="company_password" className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUnlockAlt} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="password"
                                    name="company_password"
                                    placeholder="Password"
                                    value={formData.company_password}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group id="company_position" className="mb-4">
                                <Form.Label>Position</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faPersonBooth} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    name="company_position"
                                    placeholder="Position"
                                    value={formData.company_position}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <Form.Group id="re_enter_password" className="mb-4">
                                <Form.Label>Re-Enter Password</Form.Label>
                                <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUnlockAlt} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="password"
                                    name="re_enter_password"
                                    placeholder="Re-Enter Password"
                                    value={formData.re_enter_password}
                                    onChange={handleChange}
                                />
                                </InputGroup>
                            </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group id="company_size" className="mb-4">
                                <Form.Label>Company Size</Form.Label>
                                <Form.Control
                                as="select"
                                required
                                name="company_size"
                                value={formData.company_size}
                                onChange={handleChange}
                                >
                                <option value="">Choose...</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                </Form.Control>
                            </Form.Group>
                            </div>
                        </div>
                        <FormCheck type="checkbox" className="d-flex mb-4">
                            <FormCheck.Input required id="terms" className="me-2" />
                            <FormCheck.Label htmlFor="terms">
                            I agree to the <Card.Link>terms and conditions</Card.Link>
                            </FormCheck.Label>
                        </FormCheck>

                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                            Sign up
                        </Button>
                        {error && <div className="text-danger mt-3">{error}</div>}
                        </Form>

    
                    <div className="mt-3 mb-4 text-center">
                      <span className="fw-normal">or</span>
                    </div>
                    <div className="d-flex justify-content-center my-4">
                      <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Button>
                      <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Button>
                      <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                        <FontAwesomeIcon icon={faGithub} />
                      </Button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <span className="fw-normal">
                        Already have an account?
                        <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                          {` Login here `}
                        </Card.Link>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      );
};

export default Register;
