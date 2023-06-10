import "./chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Create API
const data = [
    {Month: "July", Total: 1898},
    {Month: "Augest", Total: 2721},
    {Month: "September", Total: 1634},
    {Month: "October", Total: 2197},
    {Month: "November", Total: 1454},
];

const Chart = ({aspect, title}) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height="60%" aspect={aspect} className="chartContainer">
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }} className="tspan">
                    <defs>
                        <linearGradient id="total" x1="0.2" y1="0.6" x2="0.6" y2="0.4">
                            <stop offset="2%" stopColor="#00ab55" stopOpacity={1} />
                            <stop offset="98%" stopColor="#76d5a5" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="Month" className="month"/>
                    <CartesianGrid strokeDasharray="4 1"  className="chartLine"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#00ab55" fillOpacity={0.8} fill="url(#total)" className="area" />                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart