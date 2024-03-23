import { EventEntity } from "./EventEntity";

export class TeamStatusEntity {
    constructor() { }
    private teamMatchIds: string[] = []
    private events: EventEntity[] = []

    findGames(events: EventEntity[], teamCode: string) {
        this.events = events.filter((event) => {
            return event.teams.find((team) => team.code === teamCode)
        })
        return this.events
    }

    getMatchIds() {
        const ids = this.events.map((event) => {
            return event.gameIds
        })

        console.log(ids)
        return ids.reduce((acc, curr) => acc.concat(curr), [])
    }
}