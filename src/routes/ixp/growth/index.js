import React from "react";
import { Col, Row } from "antd";
import { Typography } from 'antd';
import GrowthBarChart from "./GrowthBarChart";
import AreaChart from "./VisibleResourceChart";

const { Title, Text } = Typography;


const IXPGrowth = () => {
  const sampleData = [
    {reporting_date: '2020-01-01', count: 100},
    {reporting_date: '2020-01-02', count: 200},
    {reporting_date: '2020-01-03', count: 300},
    {reporting_date: '2020-01-04', count: 400},
    {reporting_date: '2020-01-05', count: 500},
    {reporting_date: '2020-01-06', count: 600},

  ];
  return (
    <div>
     <Row>
      <Col span={24} style={{textAlign: 'center'}}>
     <Title level={2} style={{ textAlign: 'center', marginBottom: 10}}>
          Growth at IXPN Lagos
        </Title>
    </Col>
     </Row>
     <Row>
        <Col span={12}><GrowthBarChart /></Col>
        <Col span={12}><GrowthBarChart /></Col>
      </Row>
      <Row>
        <Col span={12}><AreaChart data={sampleData} /></Col>
        <Col span={12}><AreaChart data={sampleData} /></Col>
      </Row>
    </div>
  );
};

export default IXPGrowth;
