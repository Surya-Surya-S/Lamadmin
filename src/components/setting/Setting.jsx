import "./setting.scss";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';

const Setting = ({type}) => {
    let data;

    switch (type) {
        case "general" : 
        data = {
            icon : <BackupTableIcon className="icon general"/>,
            title: "General Settings"
        };
        break;
        case "promotion" : 
        data = {
            icon : <CampaignIcon className="icon promotion"/>,
            title: "Promotion Settings"
        };
        break;
        case "alert" : 
        data = {
            icon : <NotificationsActiveIcon className="icon alert"/>,
            title: "Alert Settings"
        };
        break;
        case "support" : 
        data = {
            icon : <SupportAgentIcon className="icon support"/>,
            title: "Support Settings"
        };
        break;
        case "payment" : 
        data = {
            icon : <PaymentsIcon className="icon support"/>,
            title: "Payment Settings"
        };
        break;
        case "map" : 
        data = {
            icon : <PersonPinCircleIcon className="icon support"/>,
            title: "Map Settings"
        };
        break
        default:
        break;
    }

    return(
        <div className="setting">
            <div className="settingContent">
                {data.icon}
                <span className="title">{data.title}</span>
            </div>
        </div>
    )
}

export default Setting;