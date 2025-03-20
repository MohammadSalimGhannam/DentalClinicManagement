import React, {useState, useContext} from "react";
import { motion } from "framer-motion";
import { Table, Button } from "react-bootstrap";
import { WindowSizeContext } from "../WindowSizeContext";
import Title from '../Title'
import style from '../BookList/BookList.module.css'

const WaitingList = ({ patients, onDelete, onMoveToTreatment }) => {
  const windowWidth = useContext(WindowSizeContext);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow( index );
  };

  return (
    <div  className={style.container}
          style={{
            height: windowWidth > 767 ? 'calc(100vh - 186.8px)' : 'calc(100vh - 80px)',
          }}
    >
      <Title Title='Waiting List'/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={style.TableContainer}
        style={{
          maxWidth: `${windowWidth > 767 ? windowWidth - 290.4 : windowWidth - 40.4}px`,
          maxHeight: windowWidth > 767 ? 'calc(100vh - 322px)' : 'calc(100vh - 80px - 135px)',
        }}
      >
        <Table striped bordered hover className={style.Table}>
          <thead className={style.THead}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Blood Type</th>
              <th>Reservation Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr 
                key={patient.id}
                onClick={() => handleRowClick(index)}
                className={selectedRow === index ? style.selectedRow : ""}
              >
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.phone}</td>
                <td>{patient.bloodType}</td>
                <td>{patient.reservationType}</td>
                <td>{patient.reservationTime.split('T')[0]}</td>
                <td>{patient.reservationTime.split('T')[1]}</td>
                <td className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(patient.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => onMoveToTreatment(patient.id)}
                  >
                    Move to Treatment
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </motion.div>
    </div>
  );
};

export default WaitingList;