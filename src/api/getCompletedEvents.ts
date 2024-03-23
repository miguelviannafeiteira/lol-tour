import BigNumber from "bignumber.js";
import { API_KEY, api } from ".";
import { Event } from "../types/completedGames";

const tournamentId = "111561337005798024"
const matchId = "111561337007239850"
const leagueId = "98767991310872058"

export async function getCompletedEvents(): Promise<Event> {

    const { data } = await api.get<Event>(`getCompletedEvents?hl=en-US&tournamentId=${[tournamentId]}`, {
        headers: {
            "x-api-key": API_KEY
        }
    })
    return data
} 