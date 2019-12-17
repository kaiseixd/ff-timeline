import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd';
import { storeContext } from '@/stores/example'

const Example: React.FC = observer(() => {
  const store = React.useContext(storeContext)

  function handleClick() {
    store && store.makeFriend(Math.random() + '')
  }

  return (
    <div className="Example">
        <span>{ store && store.friends.map(friend => friend.name) }</span>
        <Button onClick={handleClick}>make random friend</Button>
    </div>
  )
})

export default Example
