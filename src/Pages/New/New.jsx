import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Add = () => {
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h2>Add New User</h2>
                </div>
                <div className="bottom">
                    <div className="userDetails">
                        <form>
                           <div className="formInput">
                                <label>Username</label>
                                <input type="text"  placeholder="Username"/> 
                           </div>
                           <div className="formInput">
                                <label>Email</label>
                                <input type="email"  placeholder="Enter Email"/> 
                           </div> 
                           <div className="formInput">
                                <label>Phone</label>
                                <input type="text"  placeholder="Enter Number"/> 
                           </div>
                           <div className="formInput">
                                <label>City</label>
                                <input type="text"  placeholder="Enter City"/> 
                           </div> 
                           <div className="formInput">
                               <button>SEND</button> 
                           </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;