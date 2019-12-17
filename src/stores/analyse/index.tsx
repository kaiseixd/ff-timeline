import { storeHelper } from '@/common/helper'
import { Report } from '@/types/fflogs'

const store = {
  report: {
    events: [],
    nextPageTimestamp: null
  } as Report,
  fetchReport() {
    fetch(`https://www.fflogs.com/v1/report/events/damage-done/bAMZyk61cYDL7qwG?translate=true&start=2666854&end=3294743&hostility=1&translate=true&api_key=e77da74a0a341cdd1e566931b96cb082`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.report = data
      })
  },
  get timelines() {
    return this.report.events.map(event => event.timestamp)
  }
}

export const { storeContext, StoreProvider } = storeHelper(store)
