import React, { useState } from "react";
import "./App.css";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  // Load saved employees ONCE when the app starts
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  // Save employees array to localStorage
  const saveData = (employeeArray) => {
    localStorage.setItem("employees", JSON.stringify(employeeArray));
  };

  // Add a new employee to state AND save it
  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  // Optional: Clear all employees (handy for testing)
  const clearEmployees = () => {
    setEmployees([]);
    saveData([]);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeList employees={employees} />

      {/* Optional button for testing */}
      {employees.length > 0 && (
        <button onClick={clearEmployees} style={{ marginTop: "16px" }}>
          Clear Employees
        </button>
      )}
    </div>
  );
}

export default App;
