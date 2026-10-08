const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function getEmployees() {

  const response = await fetch(
    `${API_URL}/api/employees/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}
