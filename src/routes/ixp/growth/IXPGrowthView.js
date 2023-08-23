import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Divider } from "antd";
import { Typography } from 'antd';
import { CapacityGrowthBarChart, MemberGrowthBarChart } from "./GrowthBarChart";
import { ASNTrendChart, IPv4TrendChart } from "./VisibleResourceChart";
import { useGetIXPGrowth, getIXP } from "util/Api";
import { useGetVisibleASNTrends, useGetVisiblePrefixesTrends } from "../../../util/Api";

const { Title } = Typography;


export default function IXPGrowthView({ ixpId }) {
    const ixpQuery = useQuery({
        queryKey: ['ixp', ixpId],
        queryFn: () => getIXP(ixpId),
        enabled: !!ixpId
    });

    const { data: ixpGrowthData } = useGetIXPGrowth(ixpId);
    const { data: visibleASNs } = useGetVisibleASNTrends(ixpId);
    const { data: visiblePrefixes } = useGetVisiblePrefixesTrends(ixpId);

    // wait for all queries to resolve
    if (ixpQuery.isLoading || !ixpGrowthData || !visibleASNs || !visiblePrefixes) {
        return <div>Loading IXP Info...</div>;
    }

    return (
        <div>
            <Row>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>
                        Growth at {ixpQuery.data.name}
                    </Title>
                </Col>
                <Col span={24}>
                    <Divider />
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{ textAlign: 'center', marginTop: 10 }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: 10 }}>Yearly Membership Growth</Title>
                </Col>
                <Col span={12} style={{ textAlign: 'center', marginTop: 10 }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: 10 }}>Yearly Capacity Growth </Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}><MemberGrowthBarChart data={ixpGrowthData.members} /></Col>
                <Col span={12}><CapacityGrowthBarChart data={ixpGrowthData.capacity} /></Col>
            </Row>
            <Row>
                <Col span={12} style={{ textAlign: 'center', marginTop: 10 }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: 10 }}>Count of Visible AS Numbers</Title>
                </Col>
                <Col span={12} style={{ textAlign: 'center', marginTop: 10 }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: 10 }}>Count of Visible IPv4 Prefixes</Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}><ASNTrendChart data={visibleASNs.as_numbers} /></Col>
                <Col span={12}><IPv4TrendChart data={visiblePrefixes.prefixes} /></Col>
            </Row>
        </div>
    );
};

