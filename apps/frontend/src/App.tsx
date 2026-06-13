import { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";
import CreateEmployee from "./pages/CreateEmployee";
import { fetchAllEmployees } from "./services/employeeService";
import type { Employee } from "./types/employee";
import type { Pensioner } from "./types/pensioner";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import CreatePensioner from "./pages/CreaatePensioner";
import { fetchAllPensioners } from "./services/pensionerService";

function App() {
  //props -> properties, parameter pipasan
  const [employees, setEmployees] = useState([] as Employee[]);
  const [pensioners, setPensioners] = useState([] as Pensioner[]);

  const fetchData = async () => {
    const employeeData = await fetchAllEmployees();
    setEmployees(employeeData);
    const pensionerData = await fetchAllPensioners();
    setPensioners(pensionerData);
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeTable employees={employees} />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/pensioner/create" element={<CreatePensioner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
