import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from 'antd';

import { getIXP } from 'util/Api';

// project components
//import ChartCard from "../../../components/dash/cards/ChartCard";
import IXPInfo from "./IXPInfo";

export default function IXPDashboard ({ ixpId }){
  const ixpQuery = useQuery({
    queryKey: ['ixp', ixpId],
    queryFn: () => getIXP(ixpId),
    enabled: !!ixpId
  });

  if (ixpQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (ixpQuery.isError) {
    return <div>Error fetching IXP Infomation </div>;
  }
  if (ixpQuery.data) {
    console.log(ixpQuery.data);
  }

  return (
    <>
      <Row>
        <Col span={24}><IXPInfo ixpData={ixpQuery.data}/></Col>
      </Row>
      <Row>
        <Col span={6}>Col 4</Col>
        <Col span={6}>Col 4</Col>
        <Col span={6}>Col 4</Col>
        <Col span={6}>Col 4</Col>
      </Row>
    </>
  );
};

