import "./userForm.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddUserForm from "../../components/UserForm/AddUserForm";

const AddUser = () => {
    return(
        <div className="addUser">
            <Sidebar/>
            <div className="addContainer">
                <Navbar/>
                <AddUserForm/>
            </div>
        </div>
    );
}

export default AddUser;