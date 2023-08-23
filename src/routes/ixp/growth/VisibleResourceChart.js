import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const ASNTrendChart = ({ data, title }) => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
    },
    colors: ['#003366'],
    noData: {
      text: "No Data Found",
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '16px',
        fontFamily: 'Sans-Serif'
      }
    },
    xaxis: {
      title: {
        text: 'Reporting Date',
      },
      type: 'datetime',
      categories: data.map(item => item.reporting_date),
    },
    yaxis: {
      title: {
        text: 'Visible ASNs',
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
      name: 'Visible ASNs',
      data: data.map(item => item.visible_asns),
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="area" height={350} />
  );
};

export const IPv4TrendChart = ({ data, title }) => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
    },
    colors: ['#FA8C15'],
    noData: {
      text: "No Data Found",
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '16px',
        fontFamily: 'Sans-Serif'
      }
    },
    xaxis: {
      title: {
        text: 'Reporting Date',
        style: {
          FontFace: 'Roboto',
          fontWeight: 200,
        },
      },
      type: 'datetime',
      categories: data.map(item => item.reporting_date),
    },
    yaxis: {
      title: {
        text: 'Visible Prefixes'
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
        opacityTo: 0.5,
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
      name: 'Visible Prefixes',
      data: data.map(item => item.visible_prefixes),
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="area" height={350} />
  );
};

export default ASNTrendChart;

