import { UseTeamsStatusGateway } from "../../hooks/useTeamStatus";

export class GamesDetailsUseCase {
    constructor(api: (matchId: string) => Promise<any>) {
        this.api = api
    }

    private api: (matchId: string) => Promise<any>

    async execute(matchId: string) {
        try {
            const data = await this.api(matchId)

            console.log(data);

        }
        catch (e) {
            console.error({ message: "Houve um erro ao buscar detalhes do time", erro: e })
        }
    }
}