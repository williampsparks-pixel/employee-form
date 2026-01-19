import React from "react";

function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return <p>No employees added yet.</p>;
  }

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>{employee.name}</strong>
            <br />
            Position: {employee.position}
            <br />
            Department: {employee.department}
            <br />
            Email: {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
