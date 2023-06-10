import "./delivery.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Delivery from "../../components/dataTable/Table";

const Sucessfull = () => {
    return (
        <div className="delivery">
            <Sidebar />
            <div className="deliveryContainer">
                <Navbar />
                <div className="top">
                    <h1>Delivery</h1>
                </div>
                <div className="bottom">
                    <Delivery/>
                </div>
            </div>
        </div>
    );
};

export default Sucessfull;