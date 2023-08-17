import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getCountry } from 'util/Api';
import IconWithTextCard from "../../../components/Metrics/IconWithTextCard";
import SortableTable from 'components/dash/SortableTable';


const { Title, Text } = Typography;

export default function CountryView({ countryId }) {
    const countryQuery = useQuery({
        queryKey: ['country', countryId],
        queryFn: () => getCountry(countryId),
        enabled: !!countryId
    });

    if (countryQuery.isLoading) return "Loading country info...";
    if (countryQuery.isError) return "An error has occurred while loading country info. Reload to try again.";
    //if (countryQuery.data.results.length === 0) return "No country found";
    if (countryQuery.data) {
        console.log(countryQuery.data);
    }

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
                <Col span={8}><IconWithTextCard subTitle="Number of IXPs" title={3456} /></Col>
                <Col span={8}><IconWithTextCard subTitle="Visible vs. Allocated ASNs" title={3459} /></Col>
                <Col span={8}><IconWithTextCard subTitle="Local vs. Foreign ASNs" title={3456} /></Col>
            </Row>
            <Row>
                <Col span={24}>
                <Title level={4} style={{ textAlign: 'center', marginBottom: 2 }}>
                       AS Numbers in {countryQuery.data.name}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}><SortableTable /></Col>
            </Row>
        </>
    );
}