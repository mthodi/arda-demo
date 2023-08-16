import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from "@tanstack/react-query";
import { Select } from 'antd';
import { setView, setSelectedOption } from '../../appRedux/actions';

//API imports
import { useIXPs, useCountryList, useRegions } from '../../util/Api';

const { Option } = Select;





const SearchBox = ({ styleName, placeholder, onChange, value }) => {


  const dispatch = useDispatch();
  const view = useSelector(({ common }) => common.view);
  const selectedOption = useSelector(({ common }) => common.selectedOption);

  const handleViewChange = (value) => {
    dispatch(setView(value));
    dispatch(setSelectedOption(1));
    // console.log(value);
  };

  const handleOptionChange = (value) => {
    dispatch(setSelectedOption(value));
  };

  const getViewOptions = () => {
    switch (view) {
      case 'IXP':
        return ixpList.results;
      case 'Country':
        return countryList.results;
      case 'Region':
        return regionList.results;
      default:
        return [];
    }
  };

  const getPlaceholder = () => {
    switch (view) {
      case 'IXP':
        return 'Search IXP';
      case 'Country':
        return 'Search Country';
      case 'Region':
        return 'Search Region';
      default:
        return 'Search..';
    }
  }
  const placeHolder = getPlaceholder();

  const { data: ixpList } = useIXPs();
  const { data: countryList } = useCountryList();
  const { data: regionList } = useRegions();


  return (

    <div style={{ maxWidth: 500, display: 'flex', alignItems: 'center' }}>
      <Select value={view} onChange={handleViewChange}>
        <Option value="IXP">IXP View</Option>
        <Option value="Country">Country View</Option>
        <Option value="Region">Region View</Option>
      </Select>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        showSearch
        style={{ width: '50%', minWidth: 200, marginLeft: 2 }}
        placeholder={placeHolder}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>

        {getViewOptions().map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
    </div>
  )
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};
