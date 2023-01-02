import React from 'react'
import { Input, Space } from 'antd';
const { Search } = Input;

const SearchItem = () => {
const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="Search"
      allowClear
      onSearch={onSearch}
      style={{
        width: 250,
      }}
    />
  )
}

export default SearchItem