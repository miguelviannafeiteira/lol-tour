import { useState } from "react"

export interface UseTeamsStatusGateway {
    teamStatus: any
    mountTeamStatus(teamStatus: any): void
}

export function useTeamStatus(): UseTeamsStatusGateway {
    const [teamStatus, setTeamStatus] = useState<any>([])

    function mountTeamStatus(dataEvent: any): void {
        setTeamStatus(dataEvent)
    }

    return {
        teamStatus,
        mountTeamStatus,
    }
}