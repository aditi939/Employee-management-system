import React, { useState } from 'react';
import { database } from '../../firebase'; // Import the Firebase database instance
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import the styles for the rich text editor

function EmployeeForm({addEmployee}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    study: '',
    startDate: '',
    endDate: '',
    currentSalary: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSave = () => {
    // Save the data to Firebase Realtime Database
    const newEmployeeRef = database.ref('employees').push();
    newEmployeeRef.set(formData, (error) => {
      if (error) {
        console.error('Error saving employee data:', error);
      } else {
        console.log('Form data saved:', formData);
        addEmployee(formData);
      }
    });

    // Reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      study: '',
      startDate: '',
      endDate: '',
      currentSalary: '',
      description: '',
    });
  };

  const handleCancel = () => {
    // Handle the cancel action here (e.g., reset form fields)
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      study: '',
      startDate: '',
      endDate: '',
      currentSalary: '',
      description: '',
    });
  };


  return (
    <div className="form-container">
      <h2 className="form-title">Employee Registration Form</h2>
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your name" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your name" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">dob:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="Enter your dob" 
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="study">Study:</label>
          <input
            type="text"
            id="study"
            name="study"
            placeholder="BE" 
            value={formData.study}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="YYYY-MM-DD" 
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="YYYY-MM-DD" 
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="currentSalary">Current Salary:</label>
          <input
            type="number"
            id="currentSalary"
            name="currentSalary"
            placeholder="30000" 
            value={formData.currentSalary}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="description">Description:</label>
          <ReactQuill
            value={formData.description}
            onChange={(value) => handleChange('description', value)}
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'], // Add bold, italic, underline options
                ['link'],
              ],
            }}
          />
        </div> */}
        <div className="button-group">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
