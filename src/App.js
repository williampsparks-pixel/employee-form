import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

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

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} employees={employees} />
    </div>
  );
}

export default App;
