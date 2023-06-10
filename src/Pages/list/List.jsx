import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/usertable/Usertable";

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
               <div className="top">
                <h1>List of Users</h1>
               </div>
               <div className="bottom">
               <DataTable />
               </div>
            </div>
        </div>
    )
};

export default List;