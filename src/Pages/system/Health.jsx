import "./health.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Health from "../../components/system/Health";
import Featured from "../../components/sysFeature/Featured";

const System = () => {
    return (
        <div className="system">
            <Sidebar />
            <div className="sysContainer">
                <Navbar />
                <div className="charts">
                   <div className="chartsInner">
                        <Featured className="feature"/>
                        <Health aspect={1.8 / 1.2} title="Last 5 Months (Revenue):" className="sysHealth"/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default System;