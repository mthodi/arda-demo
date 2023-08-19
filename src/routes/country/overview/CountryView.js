import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getCountry, useGetCountryOverviewStats, useGetCountryASNs } from 'util/Api';
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import CountryASNTable from "./CountryASNTable";


const { Title, Text } = Typography;

export default function CountryView({ countryId }) {
    const countryQuery = useQuery({
        queryKey: ['country', countryId],
        queryFn: () => getCountry(countryId),
        enabled: !!countryId
    });

    const { data: countryOverview } = useGetCountryOverviewStats(countryId);
    const { data: countryASNs } = useGetCountryASNs(countryId);

    // wait for all queries to resolve
    if (countryQuery.isLoading || !countryOverview || !countryASNs) {
        return <div>Loading Country Info...</div>;
    }
    console.log(countryASNs);
    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 1 }}>
                        {countryQuery.data.name}
                    </Title>
                    <Text strong style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}>
                        Internet Region: {countryQuery.data.region}
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col span={8}><IconWithTextCard subTitle="Number of IXPs" title={countryOverview.ixp_count} /></Col>
                <Col span={8}><IconWithTextCard subTitle="ASNs Present at IXP Vs. Allocated ASNs" title={countryOverview.present_vs_allocated} /></Col>
                <Col span={8}><IconWithTextCard subTitle="Local Vs. Foreign ASNs at Present at IXPs" title={countryOverview.local_vs_foreign} /></Col>
            </Row>
            <Row>
                <Col span={24}>
                <Title level={4} style={{ textAlign: 'center', marginBottom: 10 }}>
                       AS Numbers in {countryQuery.data.name}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}><CountryASNTable data={countryASNs}/></Col>
            </Row>
        </>
    );
}