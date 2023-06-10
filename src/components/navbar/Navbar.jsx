import "./navbar.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Avatar from "../../components/navbar/images/avatar.jpg"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode";

const Navbar = () =>{
    const {dispatch} = useContext(DarkModeContext);
    
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <SearchSharpIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageSharpIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type:"TOGGLE"})}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MenuOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src={Avatar} alt="avatar" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar