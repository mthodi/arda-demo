import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getRegion } from 'util/Api';
import IconWithTextCard from "../../../components/Metrics/IconWithTextCard";
import SortableTable from 'components/dash/SortableTable';


const { Title} = Typography;

export default function RegionView({ regionId }) {
    const regionQuery= useQuery({
        queryKey: ['region', regionId],
        queryFn: () => getRegion(regionId),
        enabled: !!regionId
    });

    if (regionQuery.isLoading) return "Loading country info...";
    if (regionQuery.isError) return "An error has occurred while loading country info. Reload to try again.";
    if (regionQuery.data) {
        console.log(regionQuery.data);
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
                <Col span={12}><IconWithTextCard subTitle="Average Number of IXPs Per Country" title={3456} /></Col>
                <Col span={12}><IconWithTextCard subTitle="Average AS Path" title={3459} /></Col>
                {/* <Col span={8}><IconWithTextCard subTitle="Local vs. Foreign ASNs" title={3456} /></Col> */}
            </Row>
            <Row>
                <Col span={24}>
                <Title level={4} style={{ textAlign: 'center', marginBottom: 2 }}>
                       AS Numbers in {regionQuery.data.name}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}><SortableTable /></Col>
            </Row>
        </>
    );
}