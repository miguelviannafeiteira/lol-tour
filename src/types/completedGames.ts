export interface Event {
    data: Data
}

export interface Data {
    schedule: Schedule;
}

export interface Schedule {
    events: EventElement[];
}

export interface EventElement {
    startTime: Date;
    blockName: BlockName;
    league: League;
    match: Match;
    games: Game[];
}

export enum BlockName {
    Week1 = "Week 1",
    Week2 = "Week 2",
    Week3 = "Week 3",
    Week4 = "Week 4",
    Week5 = "Week 5",
    Week6 = "Week 6",
    Week7 = "Week 7",
}

export interface Game {
    id: string;
    vods: VOD[];
}

export interface VOD {
    parameter: string;
}

export interface League {
    name: LeagueName;
}

export enum LeagueName {
    Lck = "LCK",
}

export interface Match {
    id: string;
    type: MatchType;
    teams: Team[];
    strategy: Strategy;
}

export interface Strategy {
    type: StrategyType;
    count: number;
}

export enum StrategyType {
    BestOf = "bestOf",
}

export interface Team {
    name: string;
    code: string;
    image: string;
    result: Result;
}

export interface Result {
    gameWins: number;
}

export enum MatchType {
    Normal = "normal",
}
