import React from "react";
//import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import { getIXPs } from 'util/Api';

// project components
import IXPView from "./IXPView";
//import IXPSelector from "./IXPSelector";

const IXPOverview = () => {
  const { data, isLoading, isError } = useQuery(["ixps"], getIXPs);

  const selectedIXP = useSelector(({ common }) => common.selectedIXP);

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred: " + isError.message;
  if (data.results.length === 0) return "No IXPs found";

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