import { useEffect, useState } from "react";
import { getEmployees } from "./api";

function App() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getEmployees()
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return (
    <div style={{ padding: "40px" }}>

      <h1>Employee Management System</h1>

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>

            {employees.map(employee => (

              <tr key={employee.id}>

                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
                <td>{employee.salary}</td>
                <td>{employee.location}</td>

              </tr>

            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}

export default App;
