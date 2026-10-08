const API_URL =
  import.meta.env.VITE_API_URL || "internal-Internal-LB-1097588056.ap-south-1.elb.amazonaws.com";

export async function getEmployees() {

  const response = await fetch(
    `${API_URL}/api/employees/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}
