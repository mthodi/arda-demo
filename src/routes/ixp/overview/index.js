import React from "react";
//import { useState } from "react";
//import { useQuery } from "@tanstack/react-query";
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

//import { getIXPs } from 'util/Api';

// project components
import IXPView from "./IXPView";

const IXPOverview = () => {

  const selectedIXP = useSelector(({ common }) => common.selectedIXP);

  return (
    <>
      <Row>
        <Col span={24}>
          <IXPView ixpId={selectedIXP} /> </Col>
      </Row>
    </>
  )
};

export default IXPOverview;