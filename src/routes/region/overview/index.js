import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from 'antd';

import RegionView from "./RegionView";

const RegionOverview = () => {

  const selectedRegion = useSelector(({ common }) => common.selectedRegion);
  return (
    <>
      <Row>
        <Col span={24}>
          <RegionView regionId={selectedRegion} />
        </Col>
      </Row>
    </>
  );
};

export default RegionOverview;
