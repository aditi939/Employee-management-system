// App.js
import React, { useState } from 'react';
import './App.css';
import EmployeeForm from '../src/components/employee/EmployeeForm';
import EmployeeList from '../src/components/employee/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
