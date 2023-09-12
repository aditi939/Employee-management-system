import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function EmployeeList({ employees }) {
  const [editEmployee, setEditEmployee] = useState(null);
  const [viewEmployee, setViewEmployee] = useState(null);
  const [employeeList, setEmployeeList] = useState(employees);

  const handleEdit = (employee) => {
    setEditEmployee(employee);
  };

  const handleView = (employee) => {
    setViewEmployee(employee);
  };

   const handleDelete = (index) => {
    const updatedEmployees = [...employeeList];
    updatedEmployees.splice(index, 1);
    setEmployeeList(updatedEmployees);
  };
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dob}</td>
              <td>{employee.startDate}</td>
              <td>{employee.endDate}</td>
              <td>{employee.description}</td>
              <td>
                <span className="edit-icon" onClick={() => handleEdit(employee)}>
                  <i className="fas fa-edit"></i>
                </span>
                <span className="view-icon" onClick={() => handleView(employee)}>
                  <i className="fas fa-eye"></i>
                </span>
                <span className="delete-icon" onClick={() => handleDelete(index)}>
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
