export type Group = {
    userID: string,
    gameID: string,
    active: boolean,
    sport: string,
    region: {
        lat: number,
        lon: number,
        latDelta: number,
        lonDelta: number,
    },
    skillLevel?: string,
    openSpots: number,
    playingCurrently: string[],
    message?: string,
}