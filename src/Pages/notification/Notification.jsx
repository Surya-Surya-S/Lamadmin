import "./notification.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Message from "../../components/notification/Notification";

const Notification = () => {
    return(
        <div className="notification">
            <Sidebar/>
            <div className="notifiContainer">
                <Navbar/>
                <div className="top">
                    <h1>Notifications</h1>
                </div>
                <div className="bottom">
                    <Message/>
                </div>
            </div>
        </div>
    );    
};

export default Notification;