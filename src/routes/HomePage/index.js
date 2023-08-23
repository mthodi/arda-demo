import React from "react";
import { Row, Col, Typography } from "antd";
//import IntlMessages from "util/IntlMessages";

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>
            Welcome to ARDA
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Text  style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}>
            ARDA was developed to address the need for comprehensive and up-to-date information on internet topology and connectivity in Africa,
            from an African perspective. The platform aims to offer easily accessible data that goes beyond basic metrics,
            providing insights into the direct and indirect connections between networks through Internet Exchange Points (IXPs)
            and their geographic reach. By analyzing publicly available BGP data, ARDA is able to track the active interconnection of
            networks across the region and highlight specific points of connection. This progressive and visual data on
            interconnection status, presented from the viewpoint of each country's IXP, eliminates the need for
            resource-intensive data processing and enables users to monitor progress, identify gaps, and explore
            opportunities. In the spirit of supporting interconnection research and development,
            ARDA offers this valuable information free of charge, making it an
            invaluable resource for understanding and advancing network connectivity in Africa.
          </Text>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default HomePage;
