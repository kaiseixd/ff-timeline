import React from 'react'
import { StoreProvider } from '@/stores/example'
import View from './view';

const Container: React.FC = () => {
  return (
    <StoreProvider>
      <View />
    </StoreProvider>
  )
}

export default Container