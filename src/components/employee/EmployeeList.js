import React from 'react';

function EmployeeList({ employees }) {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
