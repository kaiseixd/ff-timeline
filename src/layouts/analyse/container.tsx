import React from 'react'
import { StoreProvider } from '@/stores/analyse'
import View from './view';

const Container: React.FC = () => {
  return (
    <StoreProvider>
      <View />
    </StoreProvider>
  )
}

export default Container