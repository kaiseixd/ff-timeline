import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { useParams } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';

const Analyse: React.FC = observer(() => {
  const { code } = useParams();
  const localState = useLocalStore(() => ({
    count: 0,
    addCount() {
      localState.count += 1
    }
  }));

  useEffect(() => {
    fetch(`https://www.fflogs.com/v1/report/events/damage-done/bAMZyk61cYDL7qwG?translate=true&start=2666854&end=3294743&hostility=1&translate=true&api_key=e77da74a0a341cdd1e566931b96cb082`, { mode: 'cors'})
      .then(response => response.json())
      .then(data => console.info(data))
  }, [])

  return (
    <div className="analyse">
        code: { code }
        <span onClick={localState.addCount}>click me</span>
    </div>
  );
});

export default Analyse;
