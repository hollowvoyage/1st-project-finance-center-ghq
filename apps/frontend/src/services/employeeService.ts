import type {
  Employee,
  EmployeeFormData,
  ApiResponse,
} from "../types/employee";

const BASE_URL = "http://localhost:8000/api";

export async function fetchAllEmployees(): Promise<Employee[]> {
  const response = await fetch(`${BASE_URL}/employees`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load employees.`,
    );
  }
  const json: ApiResponse<Employee[]> = await response.json();
  return json.data;
}

export async function createEmployee(
  employeeData: EmployeeFormData,
): Promise<Employee> {
  const response = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
  if (!response.ok) {
    throw new Error(
      `Server error: ${response.status} - Could not create employee.`,
    );
  }
  const json: ApiResponse<Employee> = await response.json();
  return json.data;
}

export async function fetchEmployeeById(id: number): Promise<Employee> {
  const response = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load employee.`,
    );
  }

  const json: ApiResponse<Employee> = await response.json();
  return json.data;
}
