import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">LAMADMIN</span>
                <img src="/images/leaf.png" alt="leaf" title="leaf" className="logo_img" />
            </div>
            <div className="center">
                <ul>
                    <div className="title">MAIN</div>
                    <Link to="/" className="sidebarLink active">
                        <li className="active">
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <div className="title">LISTS</div>
                    <Link to="/users" className="sidebarLink">
                        <li>
                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" className="sidebarLink">
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/orders" className="sidebarLink">
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link to="/delivery" className="sidebarLink">
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>Delivery</span>
                        </li>
                    </Link>
                    <div className="title">USEFUL</div>
                    <Link to="/stats" className="sidebarLink">
                        <li>
                            <AssessmentIcon className="icon" />
                            <span>Stats</span>
                        </li>
                    </Link>
                    <Link to="/notifications" className="sidebarLink">
                        <li>
                            <NotificationsIcon className="icon" />
                            <span>Notifications</span>
                        </li>
                    </Link>
                    <div className="title">SERVICE</div>
                    <Link to="/system" className="sidebarLink">
                        <li>
                            <AddToQueueIcon className="icon" />
                            <span>System Health</span>
                        </li>
                    </Link>
                    <Link to="/setting" className="sidebarLink">
                        <li>
                            <SettingsIcon className="icon" />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <div className="title">MAIN</div>
                    <Link to="/login" className="sidebarLink">
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>Log in</span>
                        </li>
                    </Link>
                    <Link to="/logout" className="sidebarLink">
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
            <div className="title">Themes</div>
                <div className="themeColors">
                <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOptions" onClick={() => dispatch({ type: "DARK" })}></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar