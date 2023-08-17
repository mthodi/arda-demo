import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getCountry } from 'util/Api';

// project components
import ASHeatmap from "components/dash/ASHeatmap";

const { Title } = Typography;

export default function CountryRelationsView ({ countryId }){
  const countryQuery = useQuery({
    queryKey: ['country', countryId],
    queryFn: () => getCountry(countryId),
    enabled: !!countryId
  });

  if (countryQuery.isLoading) {
    return <div>Loading Country Info...</div>;
  }
  if (countryQuery.isError) {
    return <div>Error fetching Country Infomation </div>;
  }
  if (countryQuery.data) {
    console.log(countryQuery.data);
  }

  return (
    <>
      <Row>
        <Col span={24}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 2}}>
          AS Relationships in {countryQuery.data.name}
        </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}><ASHeatmap /></Col>
      </Row>
    </>
  );
}
