import "./widget.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data;

    // temporary value
    const amount = 150;
    const diff = 40;

    switch (type) {
        case "user" : 
        data = {
            title : "USER",
            isMoney : false,
            link : "See All User",
            icon : <PersonOutlinedIcon className="icon user"/>,
        };
        break;
         case "order" : 
        data = {
            title : "ORDERS",
            isMoney : false,
            link : "See All User",
            icon : <ShoppingCartOutlinedIcon className="icon order"/>,
        };
        break;
        case "earning" : 
        data = {
            title : "EARNINGS",
            isMoney : true,
            link : "View Net Earnings",
            icon : <MonetizationOnOutlinedIcon className="icon earning"/>,
        };
        break;
        case "balance" : 
        data = {
            title : "BALANCE",
            isMoney : true,
            link : "See Details",
            icon : <AccountBalanceWalletOutlinedIcon className="icon balance"/>,
        };
        break;
        default:
        break;
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$" } {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget