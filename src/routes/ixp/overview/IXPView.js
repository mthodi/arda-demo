import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from 'antd';

import { getIXP } from 'util/Api';
import SortableTable from 'components/dash/SortableTable';

// project components
import IconWithTextCard from "../../../components/Metrics/IconWithTextCard";
import IXPInfo from "./IXPInfo";
import MemberChart from "./IXPMemberChart";

export default function IXPDashboard ({ ixpId }){
  const ixpQuery = useQuery({
    queryKey: ['ixp', ixpId],
    queryFn: () => getIXP(ixpId),
    enabled: !!ixpId
  });

  if (ixpQuery.isLoading) {
    return <div>Loading IXP Info...</div>;
  }
  if (ixpQuery.isError) {
    return <div>Error fetching IXP Infomation </div>;
  }
  // if (ixpQuery.data) {
  //   console.log(ixpQuery.data);
  // }

  return (
    <>
      <Row>
        <Col span={24}><IXPInfo ixpData={ixpQuery.data}/></Col>
      </Row>
      <Row>
        <Col span={6}><IconWithTextCard subTitle="Total Visible ASNs" title={3456}/></Col>
        <Col span={6}><IconWithTextCard subTitle="Total Visible Prefixes" title={3459}  /></Col>
        <Col span={6}><IconWithTextCard subTitle="Average AS Path Length" title={3456} /></Col>
        <Col span={6}><IconWithTextCard subTitle="Visible Vs. Allocated ASNs" title={3456} /></Col>
      </Row>
      <Row>
        <Col span={12}><MemberChart /></Col>
        <Col span={12}><MemberChart /></Col>
      </Row>
      <Row>
        <Col span={12}><h2>Members at JINX </h2></Col>
      </Row>
      <Row>
        <Col span={24}><SortableTable /></Col>
      </Row>
    </>
  );
};

