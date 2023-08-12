import useEventEmitter, { EventEmitter } from "ahooks/lib/useEventEmitter"
import React from "react"
import { IZSK } from "../base"

export interface AppEventTypes {
  action: string
  payload: any
}

type EventEmitterPlaceholder = {
  emit: () => void
  useSubscription: () => void
}

export const EventsContext = React.createContext<
  EventEmitter<AppEventTypes> | EventEmitterPlaceholder
>({
  emit: () => null,
  useSubscription: () => null,
})

export const EventsProvider: IZSK.FC = ({ children }) => {
  const event$ = useEventEmitter<AppEventTypes>()!
  return (
    <EventsContext.Provider value={event$}>{children}</EventsContext.Provider>
  )
}
