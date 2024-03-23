import { useState } from "react"
import { EventEntity } from "../../domain/entities/EventEntity"

export interface UseCompletedEventsGateway {
    events: EventEntity[]
    mountEvents(dataEvents: EventEntity[]): void
}

export function useCompletedEvents(): UseCompletedEventsGateway {
    const [events, setEvents] = useState<EventEntity[]>([])

    function mountEvents(dataEvent: EventEntity[]): void {
        setEvents(dataEvent)
    }

    return {
        events,
        mountEvents,
    }
}