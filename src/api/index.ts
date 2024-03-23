import axios from "axios"

export const API_URL_PERSISTED = "https://esports-api.lolesports.com/persisted/gw"
export const API_URL_LIVE = "https://feed.lolesports.com/livestats/v1"
export const API_KEY = "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z"

export const TournamentApi = axios.create({
    baseURL: "https://prod-relapi.ewp.gg/persisted/gw/getStandings"
})

export const gameDetailsApi = axios.create({
    baseURL: `${API_URL_PERSISTED}/getEventDetails`
})

export const liveGameDetailsApi = axios.create({
    baseURL: `${API_URL_LIVE}/window/`
})

export const api = axios.create({
    baseURL: API_URL_PERSISTED
})
