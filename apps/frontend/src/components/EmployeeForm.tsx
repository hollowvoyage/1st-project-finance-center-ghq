import React, { useState } from "react";
import type { EmployeeFormData } from "../types/employee";
import { createEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

function EmployeeForm({ loadEmployees }: { loadEmployees: () => void }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const cleanedData: EmployeeFormData = {
      email: event.currentTarget.email.value.toString().trim(),
      last_name: event.currentTarget.last_name.value.toString().trim(),
      first_name: event.currentTarget.first_name.value.toString().trim(),
      gender: event.currentTarget.gender.value.toString(),
      birthday: event.currentTarget.birthday.value.toString(),
      date_hired: event.currentTarget.date_hired.value.toString(),
      salary: Number(event.currentTarget.salary.value),
    };

    try {
      await createEmployee(cleanedData);
      loadEmployees(); // Call the function to fetch updated employee list
    } catch (error) {
      console.error("Error creating employee:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the employee list page
  };

  return (
    <>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input id="first_name" name="first_name" required type="text" />
        </div>

        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input id="last_name" name="last_name" required type="text" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input id="birthday" name="birthday" type="date" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" required type="email" />
        </div>

        <div>
          <label htmlFor="department_id">Department:</label>
          <select id="department_id" name="department_id" required>
            <option value="">Select Department</option>
            <option value="1">HR</option>
            <option value="2">IT</option>
            <option value="3">Finance</option>
          </select>
        </div>

        <div>
          <label htmlFor="salary">Salary:</label>
          <input id="salary" name="salary" required type="number" />
        </div>

        <div>
          <label htmlFor="date_hired">Date Hired:</label>
          <input id="date_hired" name="date_hired" required type="date" />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default EmployeeForm;
