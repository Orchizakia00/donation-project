/* eslint-disable react/prop-types */

import { PieChart as PC, Pie, Cell } from 'recharts';

const PieChart = ({ numberOfDonations }) => {
    const totalDonations = 12;
    const availableDonations = totalDonations - numberOfDonations;

    const data = [
        { name: "Your Donation", value: numberOfDonations || 0 },
        { name: "Total Donation", value: availableDonations },
    ];

    const colors = ['#00C49F', '#FF444A']; // Define your custom colors

    // Calculate percentages for each segment
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <g>
                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            </g>
        );
    };

    return (
        <div>
            <PC width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={120}
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
            </PC>
            <div className='flex gap-10 justify-center mb-6'>
                <div className='flex gap-2'>
                    <div className='bg-[#00C49F] w-7 h-7 rounded-full text-[#00C49F]'>.</div>
                    <p className='text-lg'>Your Donation</p>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-[#FF444A] w-7 h-7 rounded-full text-[#FF444A]'>.</div>
                    <p className='text-lg'>Total Donation</p>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
