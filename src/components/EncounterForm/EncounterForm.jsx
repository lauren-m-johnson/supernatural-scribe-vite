import React, { useState } from 'react';
import './EncounterForm.css';

export default function EncounterForm(props) {
    const { onSubmit, submittedData } = props; // Add submittedData here

    const [formData, setFormData] = useState({
      title: '',
      location: '',
      description: '',
    });
  
    function handleChange(evt) {
      const newFormData = { ...formData, [evt.target.name]: evt.target.value };
      setFormData(newFormData);
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
      onSubmit(formData);
    }

  return (
    <div className="encounter-form-container">
      <form onSubmit={handleSubmit} className="encounter-form">
        <label>
          Title:
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>Title: {submittedData.title}</p>
          <p>Location: {submittedData.location}</p>
          <p>Description: {submittedData.description}</p>
        </div>
      )}
    </div>
  );
}