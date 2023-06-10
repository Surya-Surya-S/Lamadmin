import "./featured.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">System Health</h1>
                <MoreVertOutlinedIcon className="icon" />
            </div>
            <div className="bottom">
                <div className="featuredChart custom-progress-ba">
                    <CircularProgressbar value={90} text={"96%"}  strokeWidth={"8"} />
                </div>
                <div className="title">Speed up</div>
                <div className="amount">96%</div>
                <div className="content">Previous System Health Checkup.</div>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">CPU</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon className="icon"/>
                            <div className="itemAmount positive">90%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">RAM</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon className="icon"/>
                            <div className="itemAmount negative">86%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">CATCHES</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon className="icon"/>
                            <div className="itemAmount positive">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured