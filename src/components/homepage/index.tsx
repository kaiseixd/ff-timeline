import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

import Example from '@/components/example/container';

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
        <Example />
    </div>
  );
}

export default Homepage;
