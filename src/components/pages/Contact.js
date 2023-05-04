import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div style={{width: "100%", display: 'flex', justifyContent: "center", marginTop: "5%"}}>
    <div style={{width: "90%"}}>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name:</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        I'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Message:</Form.Label>
      <Form.Control as="textarea"/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>

  </Form> 
  </div>
  </div>
  );
}
