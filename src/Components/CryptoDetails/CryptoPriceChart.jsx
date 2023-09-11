
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CryptoPriceChat = ({ Spikelinedata }) => {
    const options = {
        chart: {
            markers: {
                size: 0,
            },
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false, // Disable zoom
            },

        },

        xaxis: {
            labels: {
                show: false
            },
        },

        yaxis: {
            labels: {
                formatter: (value) => `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`, // Format Y-axis labels as currency with thousand separator and 2 decimal places
            },
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        dataLabels: {
            enabled: false, // Disable data labels (numbers) on the graph line (stroke)
        },
        colors: ['#008FFB'],

    };

    const series = [
        {
            name: 'Price',
            data: Spikelinedata,
        },
    ];

    const chartContainerStyle = {
        background: '#FAFAFA', // Set the background color here
        padding: '10px', // Add padding for spacing
        borderRadius: "1em"
    };

    return (
        <div style={chartContainerStyle}>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={350} // Adjust height
            />
        </div>
    );
};

export default CryptoPriceChat;
