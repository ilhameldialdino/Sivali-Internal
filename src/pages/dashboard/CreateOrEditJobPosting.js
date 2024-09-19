import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, Container } from '@themesberg/react-bootstrap';


const CreateOrEditJobPosting = () => {

  const { method } = useParams();
  const [birthday, setBirthday] = useState("");
  const [rows, setRows] = useState([{ shiftIn: '', shiftOut: '', quota: '' }]);
  const handleAddRow = () => {
    setRows([...rows, { shiftIn: '', shiftOut: '', quota: '' }]);
  };

  const handleDeleteRow = (index) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">{method} Job Posting</h1>
          <p className="mb-0">
            {method === "Create" ? "Creating a new job post" : method === "Edit" ? "Editing a job post" : ""}
          </p>
        </Col>
      </Row>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">General information</h5>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="companys_name">
                  <Form.Label>Company's Name</Form.Label>
                  <Form.Control required type="text" placeholder="Company's Name" />
                </Form.Group>
                <Form.Group id="job_type">
                  <Form.Label>Job Type</Form.Label>
                  <Form.Control required type="text" placeholder="Job Type" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="minimum_qualification">
                  <Form.Label>Minimum Qualification</Form.Label>
                  <Form.Control as="textarea" rows="4" placeholder="Enter the minimum qualification..." />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="job_name">
                  <Form.Label>Job Name</Form.Label>
                  <Form.Control required type="text" placeholder="Job Name" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="pic_name">
                  <Form.Label>PIC Name</Form.Label>
                  <Form.Control required type="text" placeholder="PIC Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="job_category">
                      <Form.Label>Job Category</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Job Category</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="pic_phone_number">
                  <Form.Label>PIC Phone Number</Form.Label>
                  <Form.Control required type="number" placeholder="PIC Phone Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="job_title">
                      <Form.Label>Job Title</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Job Title</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="salary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control required type="number" placeholder="Salary" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="job_specialization">
                      <Form.Label>Job Specialization</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Job Specialization</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="province">
                  <Form.Label>province</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Province</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="last_education">
                      <Form.Label>Last Education</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Last Education</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="city">
                  <Form.Label>City</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">City</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Gender</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="district">
                  <Form.Label>District</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">District</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="study">
                      <Form.Label>Study</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Study</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="village">
                  <Form.Label>Village</Form.Label>
                      <Form.Select defaultValue="0">
                      <option value="0">Village</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="experience">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control required type="email" placeholder="name@company.com" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control required type="number" placeholder="Address" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="skill">
                  <Form.Label>Skill</Form.Label>
                  <Form.Control required type="email" placeholder="Skill" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="job_period">
                  <Form.Label>Job Period</Form.Label>
                  <Form.Control required type="text" placeholder="Job Period" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="job_description">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control required type="email" placeholder="Job Description" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
              <Form.Group id="start_posting">
                  <Form.Label>Start Posting</Form.Label>
                  <Datetime
                    timeFormat={false}
                    onChange={setBirthday}
                    renderInput={(props, openCalendar) => (
                      <InputGroup>
                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                        <Form.Control
                          required
                          type="text"
                          value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                          placeholder="mm/dd/yyyy"
                          onFocus={openCalendar}
                          onChange={() => { }} />
                      </InputGroup>
                    )} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="quota">
                  <Form.Label>Quota</Form.Label>
                  <Form.Control required type="number" placeholder="Quota" />
                </Form.Group>
              </Col>
            </Row>

            <h5 className="my-4">Address</h5>

            <Row className="align-items-center">
            <Col md={6} className="mb-3">
                <Form.Group id="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select defaultValue="0">
                    <option value="0">Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select defaultValue="0">
                    <option value="0">Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <h5 className="my-4">Shifting</h5>
            <Row>
              <Col>
                <Button variant="primary" onClick={handleAddRow}>Add Shift</Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Shift In</th>
                      <th>Shift Out</th>
                      <th>Quota</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="time"
                            name="shiftIn"
                            className="form-control"
                            value={row.shiftIn}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            name="shiftOut"
                            className="form-control"
                            value={row.shiftOut}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="quota"
                            className="form-control"
                            value={row.quota}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </td>
                        <td>
                          <Button variant="danger" onClick={() => handleDeleteRow(index)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit">Save</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateOrEditJobPosting;
