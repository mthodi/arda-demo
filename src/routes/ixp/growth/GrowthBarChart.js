import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GrowthBarChart = () => {
    // column chart with data labels and custom tooltip

    const data = [
        { month: '2010', members: 10 },
        { month: '2011', members: 20 },
        { month: '2012', members: 30 },
        { month: '2013', members: 40 },
        { month: '2014', members: 50 },
        { month: '2015', members: 60 },
        { month: '2016', members: 70 },
        { month: '2017', members: 80 },
        { month: '2018', members: 90 },
        { month: '2019', members: 100 },
        { month: '2020', members: 110 },
        { month: '2021', members: 120 }
    ];

    const chartData = {
        series: [{ data: data.map((item) => item.members), name: 'Members'}],
        options: {
            chart: {
                height: 350,
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                    dataLabels: {
                        position: 'top'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['#304758']
                }
            },
            
            xaxis: {
                categories: data.map((item) => item.month),
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: true
                },
                crosshairs: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                      }
                    }
                  },
                tooltip: {
                    enabled: true,
                    offsetY: -35,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                }
            },
            title: {
                text: 'Growth',
                floating: false,
                offsetY: 0,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        }
    };

    return <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height="350" />;

};

export default GrowthBarChart;