export interface Pensioner {
  id: number;
  serial_number: string;
  control_number: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  pension_account: string;
  rank: string;
  bank_name: string;
  amount_centavos: number;
  retirement_date: string;
}

export type PensionerFormData = Omit<
  Pensioner,
  "id" | "created_at" | "updated_at"
>;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}