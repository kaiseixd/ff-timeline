import React from 'react'
import { useLocalStore } from 'mobx-react'

export function storeHelper<S>(store: S) {
  const createStore = () => store
  const storeContext = React.createContext(store)
  const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(createStore)
    return (
      <storeContext.Provider value={store}>
        { children }
      </storeContext.Provider>
    )
  }
  return { storeContext, StoreProvider }
}