import "./stats.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// create API
const data = [
    {
        month: 'July',
        Minp: 3090,
        Maxp: 4100,
    },
    {
        month: 'Augest',
        Minp: 3800,
        Maxp: 4200,
    },
    {
        month: 'September',
        Minp: 2990,
        Maxp: 3000,
    },
    {
        month: 'October',
        Minp: 3990,
        Maxp: 4500,
    },
    {
        month: 'November',
        Minp: 2690,
        Maxp: 3900,
    },
];

const Stats = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <BarChart width={10} height={400} data={data}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid strokeDasharray="1 1" className="stroke"/>
                    <XAxis dataKey="month" tick={{ fill: '#e8998d'}} axisLine={{ stroke: '#e8998d'}} />
                    <YAxis tick={{ fill: '#6c9a8b'}} axisLine={{ stroke: '#6c9a8b'}} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Minp" fill="#6c9a8b" barSize={56} className="dataKey"/>
                    <Bar dataKey="Maxp" fill="#e8998d" barSize={56} className="dataKey"/>
                </BarChart>
            </ResponsiveContainer>
        </div >
    );
}

export default Stats;

