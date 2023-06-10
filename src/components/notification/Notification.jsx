import "./notification.scss";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Message = () => {
    return (
        <div className="message">
            <div className="right">
                <DoneAllIcon className="icon"/>
                <p>Mark as Read</p>
            </div>
            <div className="content">
                <ul>
                    <li>Your Product has been successfully delivered</li>
                    <li>Thank you for Visit us.</li>
                    <li>Great News! We are launching new products on Aug 27th</li>
                    <p>View all notifications</p>
                </ul>
            </div>
        </div>
    );
};

export default Message;