import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { Select } from 'antd';
import { setView, setSelectedOption, setSelectedCountry } from '../../appRedux/actions';
import { setSelectedIXP, setSelectedRegion } from '../../appRedux/actions/Common';

//API imports
import { useIXPs, useCountryList, useRegions } from '../../util/Api';
const { Option } = Select;

const SearchBox = ({ styleName, placeholder, onChange, value }) => {
  const dispatch = useDispatch();
  const view = useSelector(({ common }) => common.view);
  const selectedOption = useSelector(({ common }) => common.selectedOption);
  const selectedIXP = useSelector(({ common }) => common.selectedIXP);
  const selectedCountry = useSelector(({ common }) => common.selectedCountry);
  const selectedRegion = useSelector(({ common }) => common.selectedRegion);


  const location = useLocation();

  const handleViewChange = (value) => {
    dispatch(setView(value));
    dispatch(setSelectedOption(1));
  };

  // set view based on pathname
  useEffect(() => {
    setViewFromPathname(location.pathname, view, dispatch);
  }, [location.pathname, view, dispatch]);

  //function to set view based on pathname
  const setViewFromPathname = (pathname) => {
    const arr = pathname.split('/');
    switch (arr[1]) {
      case 'ixp':
        if (view !== 'IXP') {
          dispatch(setView('IXP'));
          dispatch(setSelectedOption(selectedIXP));
        }
        break;
      case 'country':
        if (view !== 'Country') {
          dispatch(setView('Country'));
          dispatch(setSelectedOption(selectedCountry));
        }
        break;
      case 'region':
        if (view !== 'Region') {
          dispatch(setView('Region'));
          dispatch(setSelectedOption(selectedRegion));
        }
        break;
      default: 
        {
          dispatch(setView(''));
          dispatch(setSelectedOption(''));
        }
        
    }}

  const handleOptionChange = (value) => {
    dispatch(setSelectedOption(value));
    switch (view) {
      case 'IXP':
        dispatch(setSelectedIXP(value));
        console.log(value);
        break;
      case 'Country':
        dispatch(setSelectedCountry(value));
        break;
      case 'Region':
        dispatch(setSelectedRegion(value));
        break;
      default:
        break;
    }
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
        return 'Select an IXP';
      case 'Country':
        return 'Select a Country';
      case 'Region':
        return 'Select a Region';
      default:
        return '';
    }
  }
  const placeHolder = getPlaceholder();

  const { data: ixpList } = useIXPs();
  const { data: countryList } = useCountryList();
  const { data: regionList } = useRegions();

  // wait for all queries to resolve
  if (!ixpList || !countryList || !regionList) {
    return <div>Loading...</div>;
  }


  return (

    <div style={{ maxWidth: 500, display: 'flex', alignItems: 'center' }}>
      <span style={{ marginLeft: 3, marginRight: 8 }}> {placeHolder}: </span>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        showSearch
        style={{ width: '50%', minWidth: 200, marginLeft: 2 }}
        placeholder={placeHolder}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {/* if view is IXP use option.long_name*/}
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
