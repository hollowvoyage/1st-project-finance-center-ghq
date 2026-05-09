import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //state
  const [data, setData] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/test"); //GET
      setData(await response.text());

      const employeesResponse = await fetch(
        "http://localhost:8000/api/employees",
      ); //GET
      const employeesData = await employeesResponse.json();
      setEmployees(employeesData);
      console.log(employeesData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,

      salary: event.target.salary.value,
      date_hired: event.target.date_hired.value,
    };
    const response = await fetch("http://localhost:8000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setLoading(false);
    }

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      <h1>{data}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">first_name:</label>
          <input id="first_name" name="first_name" required type="text" />
        </div>

        <div>
          <label htmlFor="last_name">last_name:</label>
          <input id="last_name" name="last_name" required type="text" />
        </div>

        <div>
          <label htmlFor="email">email:</label>
          <input id="email" name="email" required type="email" />
        </div>

        <div>
          <label htmlFor="department_id">department:</label>
          <select id="department_id" name="department_id" required>
            <option value="">Select a department</option>
            <option value="1">HR</option>
            <option value="2">IT</option>
            <option value="3">Finance</option>
          </select>
        </div>

        <div>
          <label htmlFor="salary">salary:</label>
          <input id="salary" name="salary" required type="number" />
        </div>

        <div>
          <label htmlFor="date_hired">date_hired:</label>
          <input id="date_hired" name="date_hired" required type="date" />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "saving..." : "Save"}
          </button>
          <button type="button">Cancel</button>
        </div>
      </form>
      <hr />
      <h2>list of employees</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Hired</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.date_hired}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
