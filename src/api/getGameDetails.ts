import BigNumber from "bignumber.js";
import { API_KEY, liveGameDetailsApi } from ".";
import { getISODateMultiplyOf10 } from "../util";

export async function getGameDetails(matchId: string): Promise<any> {
    let date = getISODateMultiplyOf10();

    const { data } = await liveGameDetailsApi.get(`${matchId}`, {
        params: {
            "hl": "pt-BR",
            "startingTime": date,
        },
        headers: {
            "x-api-key": API_KEY
        }
    })
    return data
} 