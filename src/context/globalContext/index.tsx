'use client'

import { PropsWithChildren, createContext, useContext } from "react"
import { UseCompletedEventsGateway, useCompletedEvents } from "../../hooks/useCompletedEvents"
import { UseTeamsStatusGateway, useTeamStatus } from "../../hooks/useTeamStatus"

type ContextType = PropsWithChildren & {
    useCompletedEventsHook: UseCompletedEventsGateway
    useTeamStatusHook: UseTeamsStatusGateway
}

export const GlobalContext = createContext({} as ContextType)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const useCompletedEventsHook = useCompletedEvents()
    const useTeamStatusHook = useTeamStatus()

    return (
        <GlobalContext.Provider value={{ useCompletedEventsHook, useTeamStatusHook }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGobalContext() {
    return useContext(GlobalContext)
}