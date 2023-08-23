import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const CapacityGrowthBarChart = ({ data }) => {
    // column chart with data labels and custom tooltip
    const chartData = {
        series: [{ data: data.map((item) => item.capacity), name: 'Capacity'}],
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
                    colors: {
                        // use a single color - dark orange for capacity growth
                        ranges: [{
                            from: 0,
                            to: 1000000000000,
                            color: '#FA8C15'
                        }]

                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetY: -20,
                formatter: function (val) {
                    if (val > 1000) {
                        return (val / 1000).toFixed(1) + "T";
                    }
                    return val + "G";
                },
                style: {
                    fontSize: '12px',
                    colors: ['#304758'],
                }
            },
            
            xaxis: {
                categories: data.map((item) => item.year),
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
                    show: true,
                    formatter: function (val) {
                        if (val > 1000) {
                            return (val / 1000).toFixed(1) + " Tbps";
                        }
                        return val + " Gbps";
                    }
                }
            },
            // title: {
            //     text: 'Capacity Growth',
            //     floating: false,
            //     offsetY: 0,
            //     align: 'center',
            //     style: {
            //         color: '#444',
            //         fontSize: '16px',
            //         FontFace: 'gaxon',
            //         className: 'gx-text-black gx-font-weight-bold',
            //     }
            // }
        }
    };

    return <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height="350" />;

};



export const MemberGrowthBarChart = ({ data }) => {
    // column chart with data labels and custom tooltip

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
                    colors: {
                        // use a single color - dark blue
                        ranges: [{
                            from: 0,
                            to: 1000000000000,
                            color: '#003366'
                        }]
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
                categories: data.map((item) => item.year),
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
                    show: true,
                }
            },
            // title: {
            //     text: 'Membership Growth',
            //     floating: false,
            //     offsetY: 0,
            //     align: 'center',
            //     style: {
            //         color: '#444'
            //     }
            // }
        }
    };
    return <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height="350" />;
};
