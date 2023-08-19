import React, { useState } from 'react';
import { Table } from 'antd';

const DataTable = ({ data }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const onRowExpand = record => {
    const newRowKeys = expandedRowKeys.includes(record.key)
      ? expandedRowKeys.filter(key => key !== record.key)
      : [...expandedRowKeys, record.key];
    setExpandedRowKeys(newRowKeys);
  };

  const expandedRowRender = record => {
    // check if ix_presence is empty
    if (record.ix_presence.length === 0) {
        return <p>{record.as_name} is not present at any IXPs in Africa.</p>;
    } else{
        return <p>{record.as_name} is present at {record.ix_presence.join(', ')}.</p>;
    }
  };

  const columns = [
    {
      title: 'AS Number',
      dataIndex: 'as_number',
      key: 'as_number',
      sorter: {
        compare: (a, b) => a.as_number - b.as_number,
        multiple: 1,
      },
    },
    {
      title: 'AS Name',
      dataIndex: 'as_name',
      key: 'as_name',
      sorter: {
        compare: (a, b) => a.as_name.localeCompare(b.as_name),
        multiple: 2,
      },
    },
    {
      title: 'Registration Country',
      dataIndex: 'registration_country',
      sorter: {
        compare: (a, b) => a.registration_country.localeCompare(b.registration_country),
        multiple: 3,
      },
    },
    {
      title: 'AS Type',
      dataIndex: 'as_type',
      key: 'as_type',
        sorter: {
            compare: (a, b) => a.as_type.localeCompare(b.as_type),
            multiple: 4,
        },
    },
    {
        title: 'Presence at African IXPs',
        dataIndex: 'ix_presence_count',
        key: 'ix_presence_count',
        sorter: {
            compare: (a, b) => a.ix_presence_count - b.ix_presence_count,
            multiple: 5,
        },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data.map((record, index) => ({ ...record, key: index }))}
      expandable={{
        expandedRowRender,
        expandedRowKeys,
        onExpand: (_, record) => onRowExpand(record),
        rowExpandable: record => expandedRowKeys.includes(record.key),
      }}
      onRow={record => ({
        onClick: () => onRowExpand(record),
      })}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default DataTable;
