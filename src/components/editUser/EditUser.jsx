import React, { useState } from 'react';

const EditUserForm = ({ user, onUpdateUser, onCancel }) => {
  const [userData, setUserData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = userData; // Extract name and email from userData
    const updatedUser = { ...user, name, email };
    onUpdateUser(updatedUser);
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <label>
        Name:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="phone" name="phone" value={userData.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={userData.country} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
