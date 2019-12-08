import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const Homepage: React.FC = () => {
  const history = useHistory();

  function handleSearch(code: string) {
    history.push(`/analyse/${code}`);
  }

  return (
    <div className="homepage">
        <Search
          placeholder="input report code"
          onSearch={handleSearch}
        />
    </div>
  );
}

export default Homepage;
