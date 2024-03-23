import { UseCompletedEventsGateway } from "@/hooks/useCompletedEvents";
import { EventEntity } from "@/domain/entities/EventEntity";
import { Event } from "../../types/completedGames";

export class CompletedEventsUseCase {
    constructor(api: () => Promise<Event>, useCompletedEvents: UseCompletedEventsGateway) {
        this.api = api
        this.useCompletedEvents = useCompletedEvents
    }

    private api: () => Promise<Event>
    private useCompletedEvents: UseCompletedEventsGateway

    async execute() {
        try {
            const data = await this.api()

            const matchs = data.data.schedule.events.map((event) => new EventEntity(event))
            this.useCompletedEvents.mountEvents(matchs)
        }
        catch (e) {
            console.error({ message: "Houve um erro ao buscar os eventos", erro: e })
        }
    }
}