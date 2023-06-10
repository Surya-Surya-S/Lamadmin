import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit User {id}</h2>
      <Link to="/users">Back to User List</Link>
    </div>
  );
};

export default EditUser;
