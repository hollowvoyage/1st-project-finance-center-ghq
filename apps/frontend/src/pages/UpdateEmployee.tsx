import { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { fetchEmployeeById } from "../services/employeeService";

function UpdateEmployee({ id }: { id: number }) {
  const fetchData = async () => {
    await fetchEmployeeById(id);
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount
  return <EmployeeForm loadEmployees={fetchData} />;
}

export default UpdateEmployee;
