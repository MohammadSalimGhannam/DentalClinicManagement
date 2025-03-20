import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import Title from "../Title";

const Reservation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reservation Data:", data); 
  };

  return (
    <Container className="p-4">
      <Title Title="New Patient Reservation" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-lg p-4 bg-light rounded"
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            {/* Name */}
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <Form.Control {...field} type="text" isInvalid={!!errors.name} />
                  )}
                />
                <div style={{ minHeight: "20px" }}>
                  <Form.Control.Feedback type="invalid" className="small d-block">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            {/* Phone */}
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^09[3-9]\d{7}$/,
                      message: "Phone number must be Syrian and content 10 digits",
                    },
                  }}
                  render={({ field }) => (
                    <Form.Control {...field} type="tel" isInvalid={!!errors.phone} />
                  )}
                />
                <div style={{ minHeight: "20px" }}>
                  <Form.Control.Feedback type="invalid" className="small d-block">
                    {errors.phone?.message}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Blood Type */}
            <Col md={6}>
              <Form.Group controlId="formBloodType">
                <Form.Label>Blood Type</Form.Label>
                <Controller
                  name="bloodType"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Blood type is required" }}
                  render={({ field }) => (
                    <Form.Select {...field} isInvalid={!!errors.bloodType}>
                      <option value="">Select Blood Type</option>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </Form.Select>
                  )}
                />
                <div style={{ minHeight: "20px" }}>
                  <Form.Control.Feedback type="invalid" className="small d-block">
                    {errors.bloodType?.message}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            {/* Reservation Type */}
            <Col md={6}>
              <Form.Group controlId="formReservationType">
                <Form.Label>Reservation Type</Form.Label>
                <Controller
                  name="reservationType"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Reservation type is required" }}
                  render={({ field }) => (
                    <Form.Select {...field} isInvalid={!!errors.reservationType}>
                      <option value="">Select Type</option>
                      <option value="Direct">Direct</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Emergency">Emergency</option>
                    </Form.Select>
                  )}
                />
                <div style={{ minHeight: "20px" }}>
                  <Form.Control.Feedback type="invalid" className="small d-block">
                    {errors.reservationType?.message}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            {/* Reservation Time */}
            <Col md={6}>
              <Form.Group controlId="formReservationTime">
                <Form.Label>Reservation Date & Time</Form.Label>
                <Controller
                  name="reservationTime"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Date and time are required" }}
                  render={({ field }) => (
                    <Form.Control {...field} type="datetime-local" isInvalid={!!errors.reservationTime} />
                  )}
                />
                <div style={{ minHeight: "20px" }}>
                  <Form.Control.Feedback type="invalid" className="small d-block">
                    {errors.reservationTime?.message}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            {/* Submit Button */}
            <Col md={6} className="d-flex align-items-center">
              <Button type="submit" variant="primary" className="w-100 mt-2" style={{backgroundColor: 'var(--first-color)'}}>
                Submit Reservation
              </Button>
            </Col>
          </Row>
        </Form>
      </motion.div>
    </Container>
  );
};

export default Reservation;