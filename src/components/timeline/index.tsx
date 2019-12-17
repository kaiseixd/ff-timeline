import React from 'react'
import { Event } from '@/types/fflogs'
import './index.less'

type IProps = {
  dataSource: Event[]
}

const timeFormatter = (time: number) => {
  return Math.floor(time / 1000)
}

const timeRender = (startTime: number, currentTime: Event['timestamp']) => {
  return timeFormatter(currentTime - startTime)
}

const abilityRender = (ability: Event['ability']) => {
  return ability.name
}

const damageRender = (amount: Event['amount'], blocked: Event['blocked']) => {
  return <span style={{ color: 'red' }}>{ amount + (blocked || 0) }</span>
}

const Timeline: React.FC<IProps> = (props) => {
  const { dataSource } = props
  const startTime = dataSource[0] && dataSource[0].timestamp;
  return (
    <div className="timeline">
      {
        dataSource.map((data, index) => {
          return (
            <div key={index}>
              { timeRender(startTime, data.timestamp) }
              { abilityRender(data.ability) }
              { damageRender(data.amount, data.blocked) }
            </div>
          )
        })
      }
    </div>
  )
}

export default Timeline