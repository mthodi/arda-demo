import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getRegion, useGetRegionOverviewStats, useGetRegionASNs } from 'util/Api';
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import RegionASNTable from "./RegionASNTable";


const { Title } = Typography;

export default function RegionView({ regionId }) {
    const regionQuery = useQuery({
        queryKey: ['region', regionId],
        queryFn: () => getRegion(regionId),
        enabled: !!regionId
    });

    const { data: regionOverview } = useGetRegionOverviewStats(regionId);
    const { data: regionASNs } = useGetRegionASNs(regionId);

    // wait for all queries to resolve
    if (regionQuery.isLoading || !regionOverview || !regionASNs) {
        return <div>Loading Region Info...</div>;
    }

    // show no data for other regions other than Africa
    if (regionOverview.region_name !== 'AFRINIC') {
        return(
        <>
            <Row>
                <Col span={24}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}>
                        {regionQuery.data.name} Internet Region
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: 2 }}>
                        We currently do not have data for {regionQuery.data.name}
                    </Title>
                </Col>
            </Row>
        </>);
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}>
                        {regionQuery.data.name} Internet Region
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={6}><IconWithTextCard subTitle="Total Number of Active IXPs" title={regionOverview.ixp_count} /></Col>
                <Col span={12}><IconWithTextCard subTitle="Allocated ASNs Vs. ASNs Present at atleast One IXP" title={`${regionOverview.present_vs_allocated}%`} /></Col>
                {/* <Col span={6}><IconWithTextCard subTitle="ASNs Not Present at any IXP" title={regionOverview.non_ixp_member_count} /></Col> */}
                <Col span={6}><IconWithTextCard subTitle="African vs. Foreign ASNs" title={`${regionOverview.local_vs_foreign}%`} /></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={4} style={{ textAlign: 'center', marginBottom: 10 }}>
                        AS Numbers in {regionQuery.data.name}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}><RegionASNTable data={regionASNs} /></Col>
            </Row>
        </>
    );
}