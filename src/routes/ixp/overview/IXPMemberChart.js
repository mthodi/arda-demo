import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const MemberCountryChart = ({ data }) => {

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
      ],
      // title: {
      //   text: 'AS Type Distribution',
      //   align: 'center',
      //   offsetX: 0,
      //   offsetY: 0,
      //   floating: false,
      //   style: {
      //     align: 'center',
      //     fontSize: '16px',
      //     fontWeight: 'bold',
      //     fontFamily: undefined,
      //     color: '#263238'
      //   },
      // }
    },
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height="330" />;
};

//export default MemberCountryChart;
export default MemberCountryChart;
