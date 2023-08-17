import React from "react";

import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import RegionASView from "./RegionASView";


const RegionASNRelations = () => {

  const selectedRegion = useSelector(({ common }) => common.selectedRegion);
  return (
    <>
      <Row>
        <Col span={24}> <RegionASView regionId={selectedRegion} /></Col>
      </Row>
    </>
  );
};

export default RegionASNRelations;
