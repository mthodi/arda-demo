import React, { useState } from 'react';
import { Table, Input } from 'antd';

const DataTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <div>
                    <button
                        type="button"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
                    </button>
                    <button onClick={() => handleReset(clearFilters)} style={{ width: 90 }}>
                        Reset
                    </button>
                </div>
            </div>
        ),
        filterIcon: filtered => (
            <span style={{ color: filtered ? '#1890ff' : undefined }}>
                Search by {dataIndex}
            </span>
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => {
                    // Auto focus the input field upon opening the filter dropdown
                    document.querySelector('.ant-table-filter-dropdown input')?.focus();
                }, 100);
            }
        },
    });

    const columns = [
        {
            title: 'ASN Name',
            dataIndex: 'asn_name',
            key: 'asn_name',
            ...getColumnSearchProps('asn_name'),
            sorter: (a, b) => a.asn_name.localeCompare(b.asn_name),
        },
        {
            title: 'ASN Number',
            dataIndex: 'asn_number',
            key: 'asn_number',
            ...getColumnSearchProps('asn_number'),
            sorter: (a, b) => a.asn_number - b.asn_number,
        },
        {
            title: 'AS Type',
            dataIndex: 'as_type',
            key: 'as_type',
            sorter: (a, b) => a.as_type.localeCompare(b.as_type),
        },
        {
            title: 'Member Since',
            dataIndex: 'member_since',
            key: 'member_since',
            sorter: (a, b) => a.member_since.localeCompare(b.member_since),
        },
        {
            title: 'Is RS Peer',
            dataIndex: 'is_rs_peer',
            key: 'is_rs_peer',
            sorter: (a, b) => (a.is_rs_peer ? 1 : -1) - (b.is_rs_peer ? 1 : -1),
            render: is_rs_peer => (is_rs_peer ? 'Yes' : 'No'),
        },
        {
            title: 'Speed',
            dataIndex: 'speed',
            key: 'speed',
            sorter: (a, b) => a.speed - b.speed,
        },
        {
            title: 'Registration Country',
            dataIndex: 'registration_country',
            key: 'registration_country',
            sorter: (a, b) => a.registration_country.localeCompare(b.registration_country),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
    );
};

export default DataTable;
