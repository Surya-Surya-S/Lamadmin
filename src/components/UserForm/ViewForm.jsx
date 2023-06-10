import React from 'react';

const ViewUserForm = ({ user, onClose }) => {
  return (
    <div className="viewButton">
      <h2>USER INFORMATION</h2>
      <p className="userInfo"><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Country:</strong>  {user.country}</p>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ViewUserForm;
