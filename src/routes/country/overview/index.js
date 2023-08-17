
import React from "react";

import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import CountryView from "./CountryView";


const CountryOverview = () => {

  const selectedCountry = useSelector(({ common }) => common.selectedCountry);
  
  return (
    <>
      <Row>
        <Col span={24}>
          <CountryView countryId={selectedCountry} />
        </Col>
      </Row>
    </>
  );
};

export default CountryOverview;
