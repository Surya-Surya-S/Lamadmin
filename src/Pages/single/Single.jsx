import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Information from "../../components/userInformation/Table"

const Single = () =>{
    return(
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="/images/avatar.jpeg" alt="avatar" className="topImg"/>
                            <div className="details">
                                <h1 className="detailsTitle">John Smith</h1>
                                <div className="detailsContent">
                                    <div className="contentKey">Email:</div>
                                    <div className="contentValue">smithjo@gmail.com</div>
                                </div>
                                <div className="detailsContent">
                                    <div className="contentKey">Phone:</div>
                                    <div className="contentValue">+23 3478 89 75</div>
                                </div>
                                <div className="detailsContent">
                                    <div className="contentKey">Address:</div>
                                    <div className="contentValue">Mark St.184, Garden So. Melbourne. </div>
                                </div>
                                <div className="detailsContent">
                                    <div className="contentKey">Country:</div>
                                    <div className="contentValue">Australia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect = {4 / 1} title = "User Spending (Last 5 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">User Buying Products</h1>
                    <Information />
                </div>
            </div>
        </div>
    )
}

export default Single;