import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const IXPSelector = ({ ixpList, selectedIXP, handleChange }) => {
  return (
    <div style={{ maxWidth: 500, display: 'flex', alignItems: 'center' }}>
      <Select
      showSearch
        style={{ width: '100%' }}
        value={selectedIXP}
        onChange={handleChange}
        placeholder="Select IXP"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
      >
        {ixpList?.map((ixp) => (
          <Option key={ixp.id} value={ixp.id}>
            {ixp.long_name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default IXPSelector;
