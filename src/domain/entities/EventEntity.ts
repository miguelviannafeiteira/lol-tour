import { EventElement, Team } from "../../types/completedGames";

export class EventEntity {
    constructor(match: EventElement) {
        this.event = match
    }

    private event: EventElement

    get id() {
        return this.event.match.id
    }

    get gameIds() {
        return this.games.map((game) => game.id)
    }

    get games() {
        return this.event.games
    }

    get teams() {
        return this.event.match.teams
    }

    get time() {
        return this.event.startTime
    }

    get strategyCunt() {
        return this.event.match.strategy.count
    }

    wonTheMatch(selectedTeam: Team): boolean {
        if (this.strategyCunt === 3) {
            const team = this.event.match.teams.find((team) => team.name === selectedTeam.name)
            return team?.result.gameWins === 2
        }

        if (this.strategyCunt === 5) {
            const team = this.event.match.teams.find((team) => team.name === selectedTeam.name)
            return team?.result.gameWins === 3
        }

        return false
    }
}