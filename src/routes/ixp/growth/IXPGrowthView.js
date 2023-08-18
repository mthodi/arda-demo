import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "antd";
import { Typography } from 'antd';
import { CapacityGrowthBarChart, MemberGrowthBarChart } from "./GrowthBarChart";
import AreaChart from "./VisibleResourceChart";
import { useGetIXPGrowth, getIXP } from "util/Api";

const { Title } = Typography;


export default function IXPGrowthView({ ixpId }) {
    const ixpQuery = useQuery({
        queryKey: ['ixp', ixpId],
        queryFn: () => getIXP(ixpId),
        enabled: !!ixpId
    });

    const { data: ixpGrowthData } = useGetIXPGrowth(ixpId);

    // wait for all queries to resolve
    if (ixpQuery.isLoading || !ixpGrowthData) {
        return <div>Loading IXP Info...</div>;
    }



    const sampleData = [
        { reporting_date: '2020-01-01', count: 100 },
        { reporting_date: '2020-01-02', count: 200 },
        { reporting_date: '2020-01-03', count: 300 },
        { reporting_date: '2020-01-04', count: 400 },
        { reporting_date: '2020-01-05', count: 500 },
        { reporting_date: '2020-01-06', count: 600 },

    ];
    return (
        <div>
            <Row>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>
                        Growth at {ixpQuery.data.name}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}><MemberGrowthBarChart data={ixpGrowthData.members} /></Col>
                <Col span={12}><CapacityGrowthBarChart data={ixpGrowthData.capacity} /></Col>
            </Row>
            <Row>
                <Col span={12}><AreaChart data={sampleData} /></Col>
                <Col span={12}><AreaChart data={sampleData} /></Col>
            </Row>
        </div>
    );
};

