import React from "react";
import { motion } from "framer-motion";
import { Table, Button } from "react-bootstrap";
import style from '../BookList/BookList.module.css'
import Title from "../Title";


const CurrentPatient = ({ patients, onDelete }) => {
  const currentPatient = patients[0];

  return (
    <div className="p-3">
      <Title Title="Being Treated" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
      <Table  striped bordered hover
              className={style.rounded}
      >
          <thead className={style.THead}>
            <tr className="text-center">
              <th>Current Patient Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Name:</strong> {currentPatient?.name}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong> {currentPatient?.phone}</td>
            </tr>
            <tr>
              <td><strong>Blood:</strong> {currentPatient?.bloodType}</td>
            </tr>
            <tr>
              <td><strong>Reservation:</strong> {currentPatient?.reservationType}</td>
            </tr>
            <tr>
              <td><strong>Date:</strong> {currentPatient?.reservationTime.split('T')[0]}</td>
            </tr>
            <tr>
              <td><strong>Time:</strong> {currentPatient?.reservationTime.split('T')[1]}</td>
            </tr>
            <tr>
              <td className="text-center">
              <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(currentPatient.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </motion.div>
    </div>
  );
};

export default CurrentPatient;