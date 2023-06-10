import "./table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Products = () => {
    const rows = [
        {
            id: 906734,
            product: "OnePlus Y1S 108cm",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQwdpOru-8F485OM5E5_nj8b-mpGLmokG-g&usqp=CAU",
            price: 40999,
            delivery: "Delivered"
        },
        {
            id: 759090,
            product: "GoPro Hero9",
            img: "data:image/png;base64,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",
            price: 20891,
            delivery: "Order Placed"
        },
        {
            id: 568934,
            product: "Nova Plus",
            img: "https://rukminim1.flixcart.com/image/128/128/l2p23rk0/iron/b/i/k/-original-imagdz3jvqmnukxt.jpeg?q=70",
            price: 500,
            delivery: "Delivered"
        },
        {
            id: 348956,
            product: "Purezento Coffee Mug",
            img: "https://rukminim1.flixcart.com/image/128/128/km6mxe80/mug/w/x/i/faith-hope-love-black-attractive-design-1-purezento-original-imagf4gs99ykhdah.jpeg?q=70",
            price: 262,
            delivery: "Cancelled"
        },
        {
            id: 127856,
            product: "boAt ROckerz ",
            img: "https://rukminim1.flixcart.com/image/128/128/kqttg280/headphone/x/g/g/rockerz-333-boat-original-imag4r33bwfttdgn.jpeg?q=70",
            price: 1299,
            delivery: "Order Placed"
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className="deliveryTable">
                        <TableCell align="center" className="tableCell" width={120}>Product ID</TableCell>
                        <TableCell align="center" className="tableCell" width={250}>Product Name</TableCell>
                        <TableCell align="center" className="tableCell" width={120}>Price</TableCell>
                        <TableCell align="center" className="tableCell" width={150}>Delivery Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} className="delivery_Table">
                            <TableCell align="center" className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell align="center" className="tableCell">{row.price}</TableCell>
                            <TableCell align="center" className="tableCell">
                                <span className={`delivery ${row.delivery}`}>{row.delivery}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Products;