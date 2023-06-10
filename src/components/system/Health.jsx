import "./health.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'July',
        Monthly: 4000,
        Previous: 2400,
        Current: 4400,
    },
    {
        month: "Augest",
        Monthly: 3000,
        Previous: 1398,
        Current: 3210,
    },
    {
        month: "September",
        Monthly: 2000,
        Previous: 4050,
        Current: 5290,
    },
    {
        month: "October",
        Monthly: 2780,
        Previous: 3908,
        Current: 2000,
    },
    {
        month: "November",
        Monthly: 1890,
        Previous: 1890,
        Current: 2181,
    },
];

const Health = ({ aspect, title }) => {
    return (
        <ResponsiveContainer width="64%" aspect={aspect} className="Health">
            <BarChart className="barChart"
                width={400}
                height={500}
                data={data}
                margin={{ top: 20, right: 40, left: 30, bottom: 5,}}
            >
                <CartesianGrid strokeDasharray="4" stroke="2"/>
                <XAxis dataKey="month" />
                <YAxis dataKey="Previous"/>
                <Tooltip dataKey="Prev" />
                <Legend dataKey="Current"/>
                <Bar dataKey="Previous" stackId="e" fill="#0a9396" className="fillColor" />
                <Bar dataKey="Current" stackId="c" fill="#005f73" className="fillColor"/>
            </BarChart>
        </ResponsiveContainer>
    );
}
export default Health;