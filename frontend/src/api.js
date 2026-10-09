const API_URL =
  import.meta.env.VITE_API_URL || "internal-Internal-App-LB-1126933481.ap-south-1.elb.amazonaws.com:80";

export async function getEmployees() {

  const response = await fetch(
    `${API_URL}/api/employees/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}
