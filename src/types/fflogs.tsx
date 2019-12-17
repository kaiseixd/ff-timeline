export type Report = {
  events: Event[],
  nextPageTimestamp: number | null
}

export type Event = {
  ability: {
    name: string,
    guid: number,
    type: number
  },
  amount: number,
  blocked: number,
  timestamp: number,
  type: string
}
