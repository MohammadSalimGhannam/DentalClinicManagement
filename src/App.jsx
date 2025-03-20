import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WindowSizeContext } from "./components/WindowSizeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import BookList from "./components/BookList/BookList";
import WaitingList from "./components/WaitingList/WaitingList";
import CurrentPatient from "./components/CurrentPatient/CurrentPatient";
import Reservation from './components/Reservation/Reservation'
import Container from "./components/Container";

function App() {
  const [patients, setPatients] = useState([]);
  const [alert, setAlert] = useState({
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '100',
    width: '100%',
    height: '100vh',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,.4)',
  });
  const windowWidth = useContext(WindowSizeContext);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setPatients(data.patients))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleMoveToWait = (id) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, status: "Waiting" } : patient
      )
    );
  };

  const handleDelete = (id) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  const handleMoveToTreatment = (id) => {
    const isAnyPatientInTreatment = patients.some((e) => e.status === "In Treatment");
  
    if (isAnyPatientInTreatment) {
      setAlert({ ...alert, display: 'flex'})
      setTimeout(() => {
        setAlert({ ...alert, display: 'none'})
      }, 5000);
      return;
    }

    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, status: "In Treatment" } : patient
      )
    );
  };

  return (
    <Router>
      <div className="d-flex flex-md-row flex-column">
        <div style={alert}>
          <p style={{backgroundColor: 'pink', color: 'red', padding: '30px'}}>
            <strong>Doctor Occupied! </strong>
            The doctor is already treating another patient.
          </p>
        </div>
        <Sidebar />
        <Container>
          {windowWidth > 767 ? <Hero/> : null}
          <Routes>
            <Route path="/BookList" element={<BookList  patients={patients.filter((p) => p.status === "Reserved")}
                                                        onDelete={handleDelete}
                                                        onMoveToWait={handleMoveToWait} />} />
            <Route path="/WaitingList" element={<WaitingList  patients={patients.filter((p) => p.status === "Waiting")}
                                                              onDelete={handleDelete}
                                                              onMoveToTreatment={handleMoveToTreatment}/>} />
            <Route path="/CurrentPatient" element={<CurrentPatient  patients={patients.filter((p) => p.status === "In Treatment")}
                                                                    onDelete={handleDelete}/>} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="*" element={<Reservation />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;