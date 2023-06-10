import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon className="icon" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={"6"} className="circularBar"/>
                </div>
                <div className="title">Total Sales made Today</div>
                <div className="amount">$555</div>
                <div className="content">Previous transactions processing. Last payment may not be included.</div>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon className="icon"/>
                            <div className="itemAmount positive">$14.9</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon className="icon"/>
                            <div className="itemAmount negative">$12.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon className="icon"/>
                            <div className="itemAmount positive">$16.2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured