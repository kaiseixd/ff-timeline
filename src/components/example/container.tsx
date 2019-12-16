import React from 'react'
import { useLocalStore } from 'mobx-react'
import createStore from './store'
import View from './view';

export const storeContext = React.createContext<ReturnType<typeof createStore> | null>(null)

const StoreProvider = (Component: React.FC) => {
  const store = useLocalStore(createStore)
  return (
    <storeContext.Provider value={store}>
      <Component />
    </storeContext.Provider>
  )
}

export default StoreProvider(View);