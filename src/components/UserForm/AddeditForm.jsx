import React, { useState } from 'react';
import "./userform.css";

const AddUserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', country: '' });
  const [rows, setRows] = useState([]);
  const [isAddUserFormOpen, setIsAddUserFormOpen] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(user);
    setUser({ name: '', email: '', phone: '', country: '' });
  };

  const handleAddUser = (user) => {
    const newId = rows.length + 1;
    const newUser = { id: newId, ...user };
    setRows([...rows, newUser]);
    setIsAddUserFormOpen(false);
  };

  return (
    <div className='addUser'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={user.phone} onChange={handleInputChange} placeholder="Phone" />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={user.country} onChange={handleInputChange} placeholder="Country" />
        </div>
        <div>
          <button type="submit" onClick={handleAddUser}>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
