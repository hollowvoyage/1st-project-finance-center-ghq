export interface Employee {
  id: number;
  email: string;
  last_name: string;
  first_name: string;
  gender: string;
  birthday: string;
  date_hired: string;
  salary: number;
  created_at: string;
  updated_at: string;
}

export type EmployeeFormData = Omit<
  Employee,
  "id" | "created_at" | "updated_at"
>;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
