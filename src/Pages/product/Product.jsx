import "./product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableList from "../../components/producttable/ProductTable";

const Product = () => {
    return(
        <div className="product">
            <Sidebar/>
            <div className="productContainer">
                <Navbar/>
                <TableList/>
            </div>
        </div>
    );
};

export default Product;