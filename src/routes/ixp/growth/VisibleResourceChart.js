import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = ({ data, title }) => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
      categories: data.map(item => item.reporting_date),
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
  };

  const series = [
    {
      name: 'Count',
      data: data.map(item => item.count),
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="area" height={350} />
  );
};

export default AreaChart;
