import React, { useState } from "react";
import { Col, Row, Card, Form, Button, Container, Modal, Alert } from '@themesberg/react-bootstrap';

const CreateJobPosting = () => {
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
          <h1 className="h2">Create Transaction</h1>
          <p className="mb-0">Creating a new credit transaction.</p>
        </Col>
      </Row>  
      
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">General information</h5>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="salary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control 
                    required 
                    type="number" 
                    placeholder="Salary Amount" 
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)} 
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="quota">
                  <Form.Label>Quota</Form.Label>
                  <Form.Control 
                    required 
                    type="number" 
                    min="0" 
                    placeholder="Quota" 
                    value={quota}
                    onChange={(e) => setQuota(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit" onClick={handleTopUpCredit}>
                Top Up Credit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Form>
          <Modal.Header>
            <Modal.Title className="h6">Top Up Credit</Modal.Title>
            <Button variant="close" aria-label="Close" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            {insufficientWarning && (
              <Alert variant="danger">
                Insufficient amount for credit. The minimum required is {minCreditAmount}.
              </Alert>
            )}
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="nominal_credit">
                  <Form.Label>Nominal Credit</Form.Label>
                  <Form.Control 
                    required 
                    type="number" 
                    placeholder="Credit Amount" 
                    value={nominalCredit} 
                    onChange={handleNominalCreditChange}  // Allow manual editing
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default CreateJobPosting;
