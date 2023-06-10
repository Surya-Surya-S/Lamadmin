import "./stats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Stats from "../../components/stats/Stats";

const Barstats = () => {
    return(
        <div className="stats">
            <Sidebar/>
            <div className="statsContainer">
                <Navbar/>
                <div className="top">
                    <h1>Chart</h1>
                </div>
                <div className="bottom">
                        <Stats aspect = {3 / 1} title = "User Spending (Last 5 Months)"/>
                </div>
            </div>
        </div>
    );
};

export default Barstats;