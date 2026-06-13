import type {
  Pensioner,
  PensionerFormData,
  ApiResponse,
} from "../types/pensioner";

const BASE_URL = "http://localhost:8000/api";

export async function fetchAllPensioners(): Promise<Pensioner[]> {
  const response = await fetch(`${BASE_URL}/pensioners`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load pensioners.`,
    );
  }
  const json: ApiResponse<Pensioner[]> = await response.json();
  return json.data;
}

export async function createPensioner(
  pensionerData: PensionerFormData,
): Promise<Pensioner> {
  const response = await fetch(`${BASE_URL}/pensioners`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pensionerData),
  });
  if (!response.ok) {
    throw new Error(
      `Server error: ${response.status} - Could not create pensioner.`,
    );
  }
  const json: ApiResponse<Pensioner> = await response.json();
  return json.data;
}

export async function fetchPensionerById(id: number): Promise<Pensioner> {
  const response = await fetch(`${BASE_URL}/pensioners/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load pensioner.`,
    );
  }

  const json: ApiResponse<Pensioner> = await response.json();
  return json.data;
}
