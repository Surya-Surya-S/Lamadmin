import "./usertable.css";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddUserForm from "../UserForm/AddeditForm";
import EditUserForm from "../../components/editUser/EditUser";
import ViewUserForm from "../../components/UserForm/ViewForm";
import EditIcon from '@mui/icons-material/Edit';

const DataTable = () => {
  // State for managing the rows of the table
  const [rows, setRows] = useState([
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', phone: '8756430987', country: 'Australia' },
    { id: 2, name: 'Roman Regins', email: 'romanr312@example.com', phone: '8905423890', country: 'Ireland' },
    { id: 3, name: 'Seth Rollans', email: 'srollans@example.com', phone: '9065137890', country: 'England' },
    { id: 4, name: 'Dean Ambrose', email: 'dashield85@example.com', phone: '9065128709', country: 'America' },
    { id: 5, name: 'Braun Strowman', email: 'browns100@example.com', phone: '7890905623', country: 'South Africa' },
  ]);

  // Function for handling row deletion
  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  // State for managing the add user form
  const [isAddUserFormOpen, setIsAddUserFormOpen] = useState(false);
  // State for managing the selected user for editing
  const [selectedUser, setSelectedUser] = useState(null);
  // State for managing the view form visibility
  const [isViewFormOpen, setIsViewFormOpen] = useState(false);
  // State for managing the edit form visibility
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);


  // Function for adding a new user
  const handleAddUser = (user) => {
    const newUser = { id: rows.length + 1, ...user };
    setRows([...rows, newUser]);
    setIsAddUserFormOpen(false);
  };

  // Function for handling the view user action
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsViewFormOpen(true);
  };

  // Function for handling the add user button click
  const handleAddUserClick = () => {
    setIsAddUserFormOpen(true);
  };

  // Function for updating a user
  const handleUpdateUser = (updatedUser) => {
    const updatedRows = rows.map((row) =>
      row.id === updatedUser.id ? updatedUser : row
    );
    setRows(updatedRows);
    setSelectedUser(null);
  };

  // Function for handling the edit user action
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditFormOpen(true);
  };

  // Configuration for the action column in the table
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        const { id } = params.row;
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleViewUser(params.row)}>
              <VisibilityIcon className="icon" />
            </div>
            <div className="deleteButton" onClick={() => handleDelete(id)}>
              <DeleteIcon className="icon" />
            </div>
            <div className="editButton" onClick={() => handleEditUser(params.row)}>
              <EditIcon className="icon" />
            </div>
          </div>
        );
      },
    },
  ];

  // Configuration for the user columns in the table
  const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 220 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone Number', width: 180 },
    { field: 'country', headerName: 'Country', width: 180 },
  ];

  const pageSizeOptions = [5, 10, 25];

  return (
    <div className="userList">
      <div className="addUserButton">
        <button onClick={handleAddUserClick} className="button">Add User</button>
      </div>
      <DataGrid
        className="userTable"
        rows={rows}
        columns={[...userColumns, ...actionColumn]}
        pageSize={5}
        rowsPerPageOptions={pageSizeOptions}
        checkboxSelection
      />
      {isAddUserFormOpen && <AddUserForm onAddUser={handleAddUser} />}
      {isViewFormOpen && selectedUser && (
        <ViewUserForm
          user={selectedUser}
          onClose={() => setIsViewFormOpen(false)}
        />
      )}
      {isEditFormOpen && selectedUser && (
        <EditUserForm
          user={selectedUser}
          onUpdateUser={handleUpdateUser}
          onClose={() => setIsEditFormOpen(false)}
        />
      )}
    </div>
  );
};

export default DataTable;