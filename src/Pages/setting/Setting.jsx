import "./setting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Settings from "../../components/setting/Setting";

const General = () =>{
    return(
        <div className="setting">
            <Sidebar/>
            <div className="settingContainer">
                <Navbar/>
                <div className="top">
                    <h1>Setting</h1>
                </div>
                <div className="bottom">
                <div className="settings">
                    <Settings type="general" className="general"/>
                    <Settings type="promotion"/>
                    <Settings type="alert"/>
                    <Settings type="support"/>
                    <Settings type="payment"/>
                    <Settings type="map"/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default General;