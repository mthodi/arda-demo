import React from "react";

import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import RelationView from "./RelationView";


const ASRelations = () => {

  const selectedCountry = useSelector(({ common }) => common.selectedCountry);
  return (
    <>
      <Row>
        <Col span={24}> <RelationView countryId={selectedCountry} /></Col>
      </Row>
    </>
  );
};

export default ASRelations;
