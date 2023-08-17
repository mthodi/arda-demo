import React from 'react';
import ReactApexChart from 'react-apexcharts';

//import { useTheme } from '@mui/material/styles';

export const MemberCountryChart = ({ data }) => {
  // const data = [
  //   { country: 'United States', percentage: 35.714285714285715 },
  //   { country: 'Angola', percentage: 35.714285714285715 },
  //   { country: 'Malawi', percentage: 14.285714285714285 },
  //   { country: 'Czech Republic', percentage: 7.14 },
  //   { country: 'Namibia', percentage: 7.14 }
  // ];

  const chartData = {
    series: data.map((item) => item.percentage),
    options: {
      chart: {
        type: 'donut'
      },
      labels: data.map((item) => item.country),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
              height: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height="330" />;
};

export const MemberTypeChart = ({ data }) => {
  
  const chartData = {
    series: data.map((item) => item.percentage),
    options: {
      chart: {
        type: 'donut'
      },
      labels: data.map((item) => item.as_type),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
              height: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height="330" />;
};

//export default MemberCountryChart;
export default MemberCountryChart;
