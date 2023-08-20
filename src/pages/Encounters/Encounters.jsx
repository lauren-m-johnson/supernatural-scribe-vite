import React from 'react';

export default function Encounters(props) {
    const { submittedData } = props;

    return (
      <div>
        <h2>Encounters</h2>
        {submittedData && (
          <div className="submitted-data">
            <p>Title: {submittedData.title}</p>
            <p>Location: {submittedData.location}</p>
            <p>Description: {submittedData.description}</p>
          </div>
        )}
      </div>
    );
}