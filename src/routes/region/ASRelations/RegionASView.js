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
        {/* <Col span={24}><ASHeatmap /></Col> */}
        <Col span={6}></Col>
        <Col span={12} style={{ textAlign: 'center', marginBottom: 2, marginTop: 10}}>
          <Text style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}>
            Understanding how different autonomous systems (AS) do business
            together is crucial for both the technical and economic aspects
            of the Internet's structure. When ASs establish relationships,
            it affects how internet traffic flows, causing certain restrictions
            on the paths traffic can take. These findings have a big impact on
            various aspects of how networks work and are studied, like making
            networks more stable, optimizing how data moves, figuring out
            the bigger picture of network structures, and other things
            that matter both in research and practical use.

            We will show AS relationships based on CAIDA's AS Relationships datasets.
          </Text>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}
