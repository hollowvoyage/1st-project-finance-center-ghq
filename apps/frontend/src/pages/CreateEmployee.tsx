import { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { fetchAllEmployees } from "../services/employeeService";

function CreateEmployee() {
  const fetchData = async () => {
    await fetchAllEmployees();
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount
  return <EmployeeForm loadEmployees={fetchData} />;
}

export default CreateEmployee;
