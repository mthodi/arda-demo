import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from 'antd';
import { getIXP, useGetIXP_ASN_Stats, useGetIXP_IPv4_Stats } from 'util/Api';
import { useGetIXPMemberDist } from 'util/Api';

// project components
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import IXPInfo from "./IXPInfo";
import { MemberCountryChart, MemberTypeChart } from "./IXPMemberChart";
import IXPMemberTable from "./IXPMemberTable";

const { Title } = Typography;

export default function IXPDashboard({ ixpId }) {
  const ixpQuery = useQuery({
    queryKey: ['ixp', ixpId],
    queryFn: () => getIXP(ixpId),
    enabled: !!ixpId
  });

  const { data: ixpASNStats } = useGetIXP_ASN_Stats(ixpId);
  const { data: ixpIPv4Stats } = useGetIXP_IPv4_Stats(ixpId);
  const { data: memberDist } = useGetIXPMemberDist(ixpId);


  if (ixpQuery.isLoading) {
    return <div>Loading IXP Info...</div>;
  }
  if (ixpQuery.isError) {
    return <div>Error fetching IXP Infomation </div>;
  }

  if (ixpASNStats) console.log(ixpASNStats);
  if (ixpIPv4Stats) { console.log(ixpIPv4Stats); }

  if (memberDist) { console.log(memberDist); }

  return (
    <>
      <Row>
        <Col span={24}><IXPInfo ixpData={ixpQuery.data} /></Col>
      </Row>
      <Row>
        <Col span={6}><IconWithTextCard subTitle="Total Visible ASNs" title={ixpASNStats.visible_as_numbers} /></Col>
        <Col span={6}><IconWithTextCard subTitle="Total Visible Prefixes" title={ixpIPv4Stats.visible_prefixes} /></Col>
        <Col span={6}><IconWithTextCard subTitle="Average AS Path Length" title={ixpASNStats.average_as_path_length} /></Col>
        <Col span={6}><IconWithTextCard subTitle="Visible Vs. Allocated ASNs" title={ixpASNStats.allocated_vs_visible_percentage} /></Col>
      </Row>
      <Row>
        <Col span={12}><MemberCountryChart data={memberDist.countries} /></Col>
        <Col span={12}><MemberTypeChart data={memberDist.types} /></Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={4} style={{ textAlign: 'center', marginBottom: 10, marginTop: 10 }}>
            Members at {ixpQuery.data.name}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}><IXPMemberTable data={ixpQuery.data.members} /></Col>
      </Row>
    </>
  );
};

