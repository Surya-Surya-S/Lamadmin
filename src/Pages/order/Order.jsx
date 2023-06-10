import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/orders/Delivery";

const Order = () => {
    return(
        <div className="order">
            <Sidebar />
            <div className="orderContainer">
                <Navbar />
                <div className="top">
                    <h1>Order List</h1>
                </div>
                <div className="bottom">
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default Order;