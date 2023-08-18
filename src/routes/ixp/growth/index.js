import React from "react";
import { Col, Row } from "antd";
import IXPGrowthView from "./IXPGrowthView";
import { useSelector } from "react-redux";



const IXPGrowth = () => {

  const selectedIXP = useSelector(({ common }) => common.selectedIXP);
  return (
    <div>
     <Row>
        <Col span={24}>
          <IXPGrowthView ixpId={selectedIXP} />
        </Col>
      </Row>
    </div>
  );
};

export default IXPGrowth;
