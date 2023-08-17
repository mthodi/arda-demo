import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';

import { getRegion } from 'util/Api';

// project components
import ASHeatmap from "components/dash/ASHeatmap";

const { Title } = Typography;

export default function RegionASView ({ regionId }){

  const regionQuery = useQuery({
    queryKey: ['region', regionId],
    queryFn: () => getRegion(regionId),
    enabled: !!regionId
  });

  if (regionQuery.isLoading) {
    return <div>Loading Region Info...</div>;
  }
  if (regionQuery.isError) {
    return <div>Error fetching Country Infomation </div>;
  }
  if (regionQuery.data) {
    console.log(regionQuery.data);
  }

  return (
    <>
      <Row>
        <Col span={24}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 2}}>
          AS Relationships in {regionQuery.data.name}
        </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}><ASHeatmap /></Col>
      </Row>
    </>
  );
}
