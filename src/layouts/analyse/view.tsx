import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { storeContext } from '@/stores/analyse';
import Timeline from '@/components/timeline';

const Analyse: React.FC = observer(() => {
  const { code } = useParams()
  const store = React.useContext(storeContext)

  useEffect(() => {
    store.fetchReport()
  }, [])

  return (
    <div className="analyse">
        code: { code }
        <Timeline dataSource={store.report.events} />
    </div>
  );
});

export default Analyse;
