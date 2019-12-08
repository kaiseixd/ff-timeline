import React, { useEffect } from 'react';
import { Input, Button } from 'antd';

const App: React.FC = () => {
  useEffect(() => {
    fetch(`https://www.fflogs.com/v1/report/events/damage-done/bAMZyk61cYDL7qwG?translate=true&start=2666854&end=3294743&hostility=1&translate=true&api_key=e77da74a0a341cdd1e566931b96cb082`, { mode: 'cors'})
      .then(response => response.json())
      .then(data => console.info(data.Name_en))
  }, [])

  return (
    <div className="homepage">
        <Input />
        <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
