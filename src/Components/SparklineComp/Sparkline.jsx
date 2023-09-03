
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphLine = ({ data }) => {
    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#008FFB'],
        tooltip: {
            enabled: false, // Hide labels on hover
        },
    };

    const series = [
        {
            name: 'Price',
            data: data,
        },
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            width={90} // Adjust width
            height={30} // Adjust height
        />
    );
};

export default GraphLine;
