import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ASHeatmap = ( { asnData, chartTitle } ) => {
  const series = React.useMemo(
    () => [
      { name: 'Jan', data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105] },
      { name: 'Feb', data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] },
      { name: 'Mar', data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] },
      { name: 'Apr', data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70,75, 80, 85, 90, 95, 100, 105, 110, 115] },
    ],
    []
  );

  const options = React.useMemo(
    () => ({
      chart: {
        height: 350,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              { from: -30, to: 5, name: 'low', color: '#00A100' },
              { from: 6, to: 20, name: 'medium', color: '#128FD9' },
              { from: 21, to: 45, name: 'high', color: '#FFB200' },
              { from: 46, to: 55, name: 'extreme', color: '#FF0000' }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      title: {
        text: chartTitle,
      }
    }),
    []
  );

  return (
      <ReactApexChart options={options} series={series} type="heatmap" height={350} />
  );
};

export default ASHeatmap;
