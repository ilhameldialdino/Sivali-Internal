import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Card, Form, Button, Container, Modal, Alert } from '@themesberg/react-bootstrap';

const CreateOrEditEducation = () => {

  const { method } = useParams();

  // State to control modal visibility
  const [showDefault, setShowDefault] = useState(false);
  
  // States to store input values
  const [salary, setSalary] = useState('');
  const [quota, setQuota] = useState('');
  const [nominalCredit, setNominalCredit] = useState('');
  const [insufficientWarning, setInsufficientWarning] = useState(false);

  // To store the multiplication result (not visible to user, just for comparison)
  const [minCreditAmount, setMinCreditAmount] = useState(0);

  // Function to handle modal close
  const handleClose = () => {
    setShowDefault(false);
    setNominalCredit('');  // Clear field when modal closes
    setInsufficientWarning(false);  // Clear warning
  };

  // Function to handle Top Up Credit click
  const handleTopUpCredit = () => {
    const salaryAmount = parseFloat(salary);
    const quotaAmount = parseFloat(quota);

    if (!isNaN(salaryAmount) && !isNaN(quotaAmount)) {
      const result = salaryAmount * quotaAmount;
      setMinCreditAmount(result); // Store minimum credit amount

      // Initialize nominal credit with the multiplication result
      setNominalCredit(result.toString());

      setShowDefault(true); // Open the modal
    }
  };

  // Handle change in the Nominal Credit field
  const handleNominalCreditChange = (e) => {
    const value = parseFloat(e.target.value);
    setNominalCredit(e.target.value);  // Update the value being typed

    // Check if the entered value is less than the minimum required amount
    if (value < minCreditAmount) {
      setInsufficientWarning(true);  // Show warning
    } else {
      setInsufficientWarning(false);  // Hide warning
    }
  };

  return (
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
        <h1 className="h2">{method} Education</h1>
          <p className="mb-0">
            {method === "Create" ? "Creating new education" : method === "Edit" ? "Editing education" : ""}
          </p>
        </Col>
      </Row>  
      
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">General information</h5>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="education">
                  <Form.Label>Education</Form.Label>
                  <Form.Control 
                    required 
                    type="text" 
                    placeholder="Education"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit" >
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateOrEditEducation;
